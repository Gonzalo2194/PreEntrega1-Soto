import React from 'react';
import ReactDom from 'react-dom/client';
import 	'bulma/css/bulma.min.css';
import NavBar from './Components/NavBar/navbar.js';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js';

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











