import "./item.css"

const Item = ({ id, name, price, img, stock }) => {
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
                    <p className="Info">
                        Precio:${price}
                    </p>
                    <p className="stock">
                        Disponibles:{stock}
                    </p>
                </section>
                    <footer className="Itemfooter">
                        <button className="Option" 
                        >Ver detalle</button>
                    </footer>
            </article>
        </section>
    );
};

export default Item
