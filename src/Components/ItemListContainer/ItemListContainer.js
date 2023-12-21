import { useState, useEffect } from 'react';
import Itemlist from '../Item/Itemlist';  
import { getProductsByCategory, getProducts } from '../../asyncmock';
import { useParams } from 'react-router-dom';

import { getDocs,collection,query,where } from 'firebase/firestore';
import { db } from '../context/service/firebase/firebaseConfig';

const ItemListContainer = ({ greeting }) => {
  const centrar = {
    textAlign: 'center',
    marginTop: '8vh',
    marginBottom: '10vh',
    color: '#b97b29',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    
  };

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams();
  
  const [expandedItemId, setExpandedItemId] = useState(null);

  const ItemsCollectionRef = collection (db,"Item");





useEffect(() =>
  setLoading(true)  
  )
  const collectionRef = categoryId
  ? query(collection(db, "Item"), where("categoria", "==", categoryId))
  : collection(db, "Item");

  getDocs(collectionRef)
    .then (response =>{
      const productAdapted = response.docs.map(doc =>{
        const data = doc.data()
        return {id: doc.id, ...data}
      })
      setProducts(productAdapted)
    })
    .catch(error =>{
      console.log(error);
    })
    .finally(()=>{
      setLoading(false);
    })

    const handleToggleExpand = (itemId) => {
    setExpandedItemId((prevExpandedItemId) => (prevExpandedItemId === itemId ? null : itemId));
  };
  
  return (
    <div>
      <h1 style={centrar}>{greeting}</h1>
      <Itemlist products={products} expandedItemId={expandedItemId} onToggleExpand={handleToggleExpand} />
    </div>
  );
};

export default ItemListContainer;






