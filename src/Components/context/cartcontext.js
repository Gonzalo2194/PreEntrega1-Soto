import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
    total: 0,
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart((prev) => [...prev, { ...item, quantity }]);
            setTotalQuantity((prevQuantity) => prevQuantity + quantity);
            setTotal((prevTotal) => prevTotal + item.price * quantity);
        } else {
            console.error("El producto ya fue agregado");
        }
    };

    const removeItem = (productId) => {
        const removedItem = cart.find((item) => item.id === productId);
        if (removedItem) {
            setCart((prev) => prev.filter((item) => item.id !== productId));
            setTotalQuantity((prevQuantity) => prevQuantity - removedItem.quantity);
            setTotal((prevTotal) => prevTotal - removedItem.price * removedItem.quantity);
        }
    };

    const clearCart = () => {
        setCart([]);
        setTotalQuantity(0);
        setTotal(0);
    };

    const isInCart = (productId) => {
        return cart.some((item) => item.id === productId);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    );
};

