import React, { useState, useEffect } from 'react';
import { getProducts } from '../../asyncmock';
import Itemlist from '../Item/Itemlist';  

const ItemListContainer = ({ greeting }) => {
  const centrar = {
    textAlign: 'center',
    marginTop: '8vh',
    marginBottom: '10vh',
    color: '#b97b29',
    fontWeight: 'bold',
    fontSize: '1.5rem',
  };

  const [productList, setProductList] = useState([]);
  const [expandedItemId, setExpandedItemId] = useState(null);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProductList(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleToggleExpand = (itemId) => {
    setExpandedItemId((prevExpandedItemId) => (prevExpandedItemId === itemId ? null : itemId));
  };

  return (
    <div>
      <h1 style={centrar}>{greeting}</h1>
      <Itemlist products={productList} expandedItemId={expandedItemId} onToggleExpand={handleToggleExpand} />
    </div>
  );
};

export default ItemListContainer;
