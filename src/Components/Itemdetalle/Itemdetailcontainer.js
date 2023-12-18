import { useState, useEffect } from "react"
import {getProductsById} from "../../asyncmock.js"
import ItemDetail from '../Itemdetalle/Itemdetail.js';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product,setProduct] = useState(null)

const {productId} = useParams()

    useEffect(() => {
        getProductsById(productId)
        .then (response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [productId])

    return(
        <div className="main-content">
            <ItemDetail {...product} />
            </div>
        )
}
export default ItemDetailContainer



