import React, { useState, useContext } from 'react';
import Itemcount from "../Itemcount/Itemcount.js";
import '../Item/item.css';
import { Link } from 'react-router-dom';

import {CartContext} from '../context/cartcontext.js';

const ItemDetail = ({ id, name, img, category, description, price, stock, expanded, onToggleExpand }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const newTotalPrice = quantity * price;
    setTotalPrice(newTotalPrice);

    const item = { id, name, price };

    addItem(item, quantity);
  };
  
  return (
    <article className={`Carditem ${expanded ? 'expanded' : ''}`}>
      <header className="Header">
        <h2 className="itemheader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="Itemimg" />
      </picture>
      {expanded && (
        <section>
          <p className="Info">
            Categoria: {category}
          </p>
          <p className="Info">
            Descripción: {description}
          </p>
          <p className="Info">
            Precio: ${price}
          </p>
        </section>
      )}
      <footer className="Itemfooter">
        {quantityAdded > 0 ? (
          <div>
            <p>Cantidad: {quantityAdded}</p>
            <p>Total: ${totalPrice}</p>
            <Link to="/cart" className="Option">
              Terminar Compra
            </Link>
          </div>
          ):
          <Itemcount
          initial={0}
          stock={stock}
          onAdd={(handleOnAdd)}
        />
      }
        <button className="Option" onClick={onToggleExpand}>
          Ver detalle
        </button>
      </footer>
    </article>
  );
};

export default ItemDetail;

