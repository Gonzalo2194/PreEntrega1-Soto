import CartWidget from "../CartWidget/cart";

const NavBar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma Logo" />
                </a>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item">Inicio</a>
                    <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">Categorias</a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item">Categ 3</a>
                            <a class="navbar-item">Categ 2</a>
                            <a class="navbar-item">Categ 2</a>
                            <a class="navbar-item">Categ 4</a>
                        </div>
                </div>
                <a className="navbar-item">Ayuda</a>
            </div>

                <CartWidget/>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary">
                                <strong>Regístrate</strong>
                            </a>
                            <a className="button is-light">
                                Inicia sesión
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
