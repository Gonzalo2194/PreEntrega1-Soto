import cart from'./asset/carrito.png'


const CartWidget = () => {
    return (
        <div>
            <img src={cart}  alt="Carrito de Compras" style={{width: 50,height: 50, marginTop:15}} />
            0
        </div>
    )
}

export default CartWidget;