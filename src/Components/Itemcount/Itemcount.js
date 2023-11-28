import React, { useState } from 'react';
import './itemcount.css';


const Itemcount = ({ stock, initial, onAdd }) => {
const [quantity, setQuantity] = useState(initial);

const increment = () => {
    if (quantity < stock) {
    setQuantity(quantity + 1);
    }
};

const decrement = () => {
    if (quantity > 1) {
    setQuantity(quantity - 1);
    }
};

return (
    <div className='itemcount-container mt-5'>
    <div className='Counter'>
        <div className='Control'>
        <button className='decrementbutton' onClick={decrement}>-</button>
        <h4 className='number'>{quantity}</h4>
        <button className='incrementbutton' onClick={increment}>+</button>
        </div>

        <div>
        <button className='button' onClick={() => onAdd(quantity)} disabled={!stock}>
            Agregar al carrito
        </button>
        </div>
    </div>
    </div>
);
};

export default Itemcount;
