import React from 'react';
import ReactDom from 'react-dom/client';
import 	'bulma/css/bulma.min.css';
import NavBar from './Components/NavBar/navbar.js';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './Components/Itemdetalle/Itemdetailcontainer.js';
import Itemcount from './Components/Itemcount/Itemcount.js';



const el = document.getElementById("root");
const root = ReactDom.createRoot(el);

function App() {
    return (
        <div>
            <NavBar/>
            <ItemListContainer greeting={"Bienvenido a compraclic"}/>
        </div>
    );
}

root.render(<App />);












