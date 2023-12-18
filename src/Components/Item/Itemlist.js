import React from 'react';
import ItemDetail from '../Itemdetalle/Itemdetail.js';


const Itemlist = ({ products, expandedItemId, onToggleExpand }) => {
  return (
    <div className="item-list">
      {products.map((product) => (
        <ItemDetail
          key={product.id}
          {...product}
          expanded={expandedItemId === product.id}
          onToggleExpand={() => onToggleExpand(product.id)}
        />
      ))}
    </div>
  );
};

export default Itemlist;



