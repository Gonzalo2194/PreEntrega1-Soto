import { useState, useEffect } from "react"
import {getProductsById} from "../../asyncmock.js"
import ItemDetail from '../Itemdetalle/Itemdetail.js';
import { useParams,Link } from "react-router-dom";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../context/service/firebase/firebaseConfig.js";

const ItemDetailContainer = () => {
    const [product,setProduct] = useState(null)
    const [loading,setLoading] = useState(true)

const {productId} = useParams()

    useEffect(() =>{
        setLoading(true)

        const docRef = doc(db,"Item",productId)

        getDoc(docRef)
        .then(response =>{
            const data = response.data()
            const productAdapted = {id: response.id,...data}

            setProduct(productAdapted)
        })
    .catch (error =>{
        console.log(error);
    })
    .finally(() =>{
        setLoading(false)
    })

},{productId})

    /*useEffect(() => {
        getProductsById(productId)
        .then (response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [productId])*/

    return(
        <div className='main-content'>
            <ItemDetail {...product} />
            </div>
        )
}
export default ItemDetailContainer;




