import React from 'react';
import ReactDom from 'react-dom/client';
import 	'bulma/css/bulma.min.css';
import NavBar from './Components/NavBar/navbar.js';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js';
import Itemcount from './Components/Itemcount/Itemcount.js';
import ItemDetalleContainer from './Components/Itemdetalle/itemdetallecontainer.js';

const el = document.getElementById("root");
const root = ReactDom.createRoot(el);

function App() {
    return (
        <div>
            <NavBar/>
            <ItemListContainer greeting={"Bienvenido a compraclic"}/>
            <ItemDetalleContainer></ItemDetalleContainer>
            <Itemcount initial={1} stock={50} onAdd={(quantity) => console.log('Cantidad agregada',quantity)}/>
        </div>
    );
}

root.render(<App />);












