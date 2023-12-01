
import Item from '../Item/item.js';

const Itemlist = ({ products }) => {
    return (
        <div className="columns is-multiline is-centerednpm ">
            {products.map((prod) => (
                <div key={prod.id} className="column is-one-third">
                    <Item {...prod} />
                </div>
            ))}
        </div>
    );
};
export default Itemlist
