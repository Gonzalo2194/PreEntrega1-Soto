
function App() {
    return (
        <div>
        <BrowserRouter>
            <NavBar />
            <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<CategoryView />} />
            <Route path="/item/:itemId" element={<ItemDetailView />} />
            <Route path="+" element={<h1>404 ERROR</h1>} />
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;