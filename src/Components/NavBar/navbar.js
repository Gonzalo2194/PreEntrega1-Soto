import { NavLink,Link } from "react-router-dom";
import CartWidget from "../CartWidget/cart";
import logo from'./asset/logo.jpg';



const NavBar = () => {
    const logoStyle = {
        width: '90px',  
        height: '90px',
    }
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                    <img src={logo} alt="compraclic-logo"style={logoStyle}/>
                </a>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item" to="/">Inicio</a>
                <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Categorias</a>
                <div className="navbar-dropdown">
                    <NavLink to ={"/category/Electrónica y Tecnología"} className="navbar-item">Electrónica y Tecnología</NavLink>
                    <NavLink to= {"/category/Hogar y Decoración"} className="navbar-item" >Hogar y Decoración</NavLink>
                    <NavLink to= {"/category/Ropa y Accesorios"} className="navbar-item" >Ropa y Accesorios</NavLink>
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
