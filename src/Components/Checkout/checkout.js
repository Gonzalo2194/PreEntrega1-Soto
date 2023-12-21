import { useState, useContext } from 'react';
import { writeBatch, addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../context/service/firebase/firebaseConfig';
import { Timestamp } from 'firebase/firestore';
import CheckoutForm from '../Checkoutform/checkoutform';
import { CartContext } from "../context/cartcontext"
import "../Checkoutform/checkoutform.css"


const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const { cart, total, clearCart } = useContext(CartContext);

    const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
        const objOrder = {
        buyer: {
            name,
            phone,
            email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
    };

        const batch = writeBatch(db);
        const outOfStock = [];
        const ids = cart.map((prod) => prod.id);
        const productsRef = collection(db, 'Item');
        const productsAddedFromFirestore = await getDocs(
        query(productsRef, where('documentId', 'in', ids))
        );
        const { docs } = productsAddedFromFirestore;

        docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDB = dataDoc.stock;

        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDB >= prodQuantity) {
            batch.update(doc.ref, { stock: stockDB - prodQuantity });
        } else {
            outOfStock.push({ id: doc.id, ...dataDoc });
        }
        });

        if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, 'orders');

        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
        clearCart();
        } else {
        console.error('Hay productos que están fuera de stock');
        }
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
};

    if (loading) {
    return <h1>Generando orden...</h1>;
    }
    if (orderId) {
        return (
            <div>
                <h1 className="felicidades">Felicidades por tu compra!!! </h1>
                <p className="ordenid">El ID de su orden es: {orderId}</p>
            </div>
        );
    }
    return (
        <div>
        <h1>Checkout</h1>
        <CheckoutForm onConfirm={createOrder} />
    </div>
    );
};

export default Checkout;
