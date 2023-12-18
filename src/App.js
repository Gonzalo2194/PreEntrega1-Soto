
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import 	'bulma/css/bulma.min.css';
import NavBar from '../src/Components/NavBar/navbar.js'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './Components/Itemdetalle/Itemdetailcontainer.js';


function App() {
return (
    <Router>
    <div>
        <NavBar />
        <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenido a compraclic" />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1>404 ERROR</h1>} />
        </Routes>
    </div>
    </Router>
);
}

export default App;




