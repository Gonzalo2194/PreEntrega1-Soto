import Itemcount from '../Itemcount/Itemcount';

const ItemDetalle = ({ id, name, price, category, img, stock, description }) => {
    return (
    <article className="CardItemDetalle">
        <header className="Header">
            <h2 className="ItemHeader">
            {name}
            </h2>
        </header>
        <picture>
            <img src={img} alt={name} className="ItemImg" />
        </picture>
        <section>
            <p className="Info">
            Categoría: {category}
            </p>
            <p className="Info">
            Descripción: {description}
            </p>
                <p className="Info">
            Precio: ${price}
            </p>
        </section>
        <footer className="ItemFooter">
          {/* Fix typo: changed "Itemcount" to "ItemCount" */}
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada')} />
        </footer>
        </article>
    );
};

export default ItemDetalle;


