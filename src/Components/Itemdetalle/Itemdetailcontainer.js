import { useState, useEffect } from "react"
import {getProductsById} from "../../asyncmock.js"
import ItemDetail from '../Itemdetalle/Itemdetail.js';

const ItemDetailContainer = () => {
    const [product,setProduct] = useState(null)

    useEffect(() => {
        getProductsById("1")
        .then (response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

    return(
        <div className="main-content">
            <ItemDetail {...product} />
            </div>
        )
}


export default ItemDetailContainer