import fotoLogo from '../../assets/extras/logo.png';
import fotoName from '../../assets/extras/cornelia-street.png';
import { NavLink } from 'react-router-dom';
import './navbar.css'
import CartIcon from '../Cart/CartIcon';

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
                                    <NavLink to="/">
                                        <img src={fotoLogo} width="50" height="150" alt="name" className="logo" />
                                    </NavLink>
                                </a> 
                            </h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page">
                                        <NavLink to="/">
                                            Inicio
                                        </NavLink>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page">
                                        <NavLink to="/category/candle">
                                            Candles
                                        </NavLink>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page">
                                        <NavLink to="/category/book">
                                            Books
                                        </NavLink>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page">
                                        <NavLink to="/category/boxes">
                                            Boxes
                                        </NavLink>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul>
                        <li className="nav-item">
                            <a className="nav-link" >
                                <NavLink to="/cart/">
                                    <CartIcon/>
                                </NavLink>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;