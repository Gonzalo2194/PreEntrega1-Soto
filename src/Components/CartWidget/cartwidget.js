import carrito from "../CartWidget/asset/carrito.png"
import { useContext } from 'react';
import { CartContext } from '../context/cartcontext';
import { Link } from 'react-router-dom';




const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    console.log('Total Quantity:', totalQuantity);
    return (
        <div>
        <Link to="/cart" className='CartWidget'> 
            <img src={carrito} alt="Carrito de Compras" style={{ width: 50, height: 50, marginTop: 15 }} />
            {totalQuantity > 0 && <span>{totalQuantity}</span>}
        </Link>
        </div>
    );
    }

export default CartWidget;