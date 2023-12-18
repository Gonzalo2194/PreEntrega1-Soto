import React from 'react';
import Itemcount from "../Itemcount/Itemcount.js";
import '../Item/item.css';

const ItemDetail = ({ id, name, img, category, description, price, stock, expanded, onToggleExpand }) => {
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
        <button className="Option" onClick={onToggleExpand}>
          Ver detalle
        </button>
        <Itemcount
          initial={1}
          stock={stock}
          onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
        />
      </footer>
    </article>
  );
};

export default ItemDetail;

