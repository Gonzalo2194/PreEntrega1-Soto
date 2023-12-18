import { useState, useEffect } from 'react';
import Itemlist from '../Item/Itemlist';  
import { getProductsByCategory, getProducts } from '../../asyncmock';
import { useParams } from 'react-router-dom';

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

  const { categoryId } = useParams();
  


  const [expandedItemId, setExpandedItemId] = useState(null);

  useEffect(() => {

    const asyncFunc = categoryId ? getProductsByCategory : getProducts;


    asyncFunc(categoryId)
      .then(response => {
        setProducts(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, [categoryId]);

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






