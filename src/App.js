
function App (){

    return (
        <div>
            <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/category/:categoryId"/>
                <Route path="/item/:itemId"/>
                <Route path="+" element ={<h1>404 ERROR</h1>}/>
            </Routes>

            </BrowserRouter>
        </div>
        );
    }