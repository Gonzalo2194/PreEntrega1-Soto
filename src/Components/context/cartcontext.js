import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
});

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);


const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
    setCart((prev) => [...prev, { ...item, quantity }]);

    setTotalQuantity((prevQuantity) => prevQuantity + quantity);
    } else {
    console.error("El producto ya fue agregado");
    }
};


    const removeItem = (productId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== productId);
    setCart(cartUpdated);

    const newTotalQuantity = cartUpdated.reduce((total, item) => total + item.quantity, 0);
    setTotalQuantity(newTotalQuantity);
    };

    const clearCart = () => {
    setCart([]);
    setTotalQuantity(0);
};

    const isInCart = (productId) => {
    return cart.some((prod) => prod.id === productId);
    };


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity }}>
        {children}
    </CartContext.Provider>
    );
};

