
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import 	'bulma/css/bulma.min.css';
import NavBar from '../src/Components/NavBar/navbar.js'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './Components/Itemdetalle/Itemdetailcontainer.js';
import { CartProvider } from './Components/context/cartcontext.js';
import Cart from './Components/Cart/cart';
import CartWidget from "./Components/CartWidget/cartwidget.js";


function App() {
return (
    <Router>
    <CartProvider>
    <div>
        <NavBar/>
        <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenido a compraclic" />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/product/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element ={<Cart/>}/> 
            <Route path="*" element={<h1>404 ERROR</h1>} />
        </Routes>
        </div>
        </CartProvider>
        </Router>
);
}

export default App;




