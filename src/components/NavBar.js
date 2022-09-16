import fotoLogo from '../assets/extras/logo.png';
import fotoName from '../assets/extras/cornelia-street.png';
import CartWidget from './CartWidget.js';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="shadow p-3 mb-5 bg-body rounded">
            <div className="encabezado">
                    <img src={fotoName} alt="" className="name"/>            
            </div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#navbar"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                <a className="nav__enlace">
                                    <Link to="/">
                                        <img src={fotoLogo} width="50" height="150" alt="name" className="logo" />
                                    </Link>
                                </a> 
                            </h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page">
                                        <Link to="/">
                                            Inicio
                                        </Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page">
                                        <Link to="/category/candle">
                                            Candles
                                        </Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" >
                                        <Link to="/category/serum">
                                            Sérums
                                        </Link>
                                    </a>
                                </li>
                            </ul>
                            <div>
                                <div className="submit">
                                    <a className="btn btn-outline-dark" >
                                        <Link to="*">
                                            Registrarse
                                        </Link>
                                    </a> 
                                    <a className="btn btn-outline-dark" >
                                        <Link to="*">
                                            Iniciar Sesión
                                        </Link>
                                    </a>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" >
                                <Link to="/cart/">
                                    <CartWidget/>
                                </Link>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;