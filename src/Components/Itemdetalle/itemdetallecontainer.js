import { useEffect,useState } from 'react'
import { getProductsById } from '../../asyncmock'
import itemdetalle from './itemdetalle.js'

const ItemDetalleContainer = () => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductsById("1")
        .then(response => {
            setProduct(response); 
        })
        .catch(error => {
            console.error(error);
        });
    }, []); 

    return (
        <div className='itemdetallecontainer'>
        <ItemDetalle {...product} />
        </div>
    );
};

export default ItemDetalleContainer;