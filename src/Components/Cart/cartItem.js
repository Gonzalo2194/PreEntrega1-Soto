import React, { useContext } from 'react';
import { CartContext } from '../context/cartcontext';

const CartItem = ({ id, name, price, quantity }) => {
const { removeItem } = useContext(CartContext);

    return (
        <div className="cart-item">
            <p> {name}</p>
            <p>Precio:${price}</p>
            <p>Cantidad: {quantity}</p>
            <p>Subtotal: ${quantity*price}</p>
            <button className="removeItemButton" onClick={() => removeItem(id)}>
            ✖
            </button>
        </div>

    );
};

export default CartItem;