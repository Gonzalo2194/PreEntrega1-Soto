const ItemListContainer =({greeting}) => {
    const centrar = {
        textAlign: 'center',  
        marginTop: '50vh', 
    }; 
    return (
        <div>
            <h1 style={centrar}>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer