import { Link } from "react-router-dom";
import "./item.css";
import { useParams } from "react-router-dom";

const Item = ({ id, name, price, img, stock }) => {
    const { productId } = useParams();

    return (
        <section className="main-content">
            <article className="Carditem">
                <header className="Header">
                    <h2 className="itemheader">{name}</h2>
                </header>
                <picture>
                    <img src={img} alt={name} className="Itemimg" />
                </picture>
                <section>
                    <p className="Info">Precio: ${price}</p>
                    <p className="stock">Disponibles: {stock}</p>
                </section>
                <footer className="Itemfooter">
                    <Link to={`/product/${productId}`} className="Option">
                        Ver detalle
                    </Link>
                </footer>
            </article>
        </section>
    );
};

export default Item;
