import fotoLogo from '../assets/logo-dark (1).png';
import fotoName from '../assets/delicate.png';
import CartWidget from './CartWidget.js';

const NavBar = () => {
    return (
        <div className="shadow p-3 mb-5 bg-body rounded">
            <div className="encabezado">
                    <img src={fotoLogo} alt="" className="logo" />
                    <img src={fotoName} alt="" className="name"/>            
            </div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#navbar"></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                <a className="nav__enlace" href="#">
                                    <img src="./imagenes/img-extras/logo-dark (1).png" width="50" height="150" alt="name" className="logo" />
                                </a> 
                            </h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        Inicio
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#">
                                        Tienda
                                    </a>
                                </li>
                            </ul>
                            <div>
                                <div className="submit">
                                    <a href="#" className="btn btn-outline-dark"  >Registrarse</a> 
                                    <a href="#" className="btn btn-outline-dark"  >Iniciar Sesión</a>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <CartWidget cart={4}/>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;