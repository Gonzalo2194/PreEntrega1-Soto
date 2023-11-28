import { useState, useEffect } from 'react';
import { getProducts } from '../../asyncmock';
import Itemlist from '../Item/Itemlist';  

const ItemListContainer = ({ greeting }) => {
    const centrar = {
    textAlign: 'center',
    marginTop: '8vh',
    marginbottom:'10vh',
    color: '#b97b29',
    fontWeight: 'bold',
    fontsize: '1.5rem',
};

    const [productList, setProductList] = useState([]);

useEffect(() => {
    getProducts()
    .then((response) => {
        setProductList(response);
    })
        .catch((error) => {
        console.error(error);
        });
}, []);

    return (
        <div>
        <h1 style={centrar}>{greeting}</h1>
        <Itemlist products={productList} />
        </div>
);
};

export default ItemListContainer
