import fotoLogo from '../assets/logo-dark (1).png';
import fotoName from '../assets/delicate.png';

const NavBar = () => {
    return (
        <div class="shadow p-3 mb-5 bg-body rounded">
            <div class="encabezado">
                    <img src={fotoLogo} alt="" class="logo" />
                    <img src={fotoName} alt="" class="name"/>            
            </div>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#navbar"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                                <a class="nav__enlace" href="#">
                                    <img src="./imagenes/img-extras/logo-dark (1).png" width="50" height="150" alt="name" class="logo" />
                                </a> 
                            </h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">
                                        Inicio
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " aria-current="page" href="#">
                                        Tienda
                                    </a>
                                </li>
                            </ul>
                            <div>
                                <div class="submit">
                                    <a href="#" class="btn btn-outline-dark"  >Registrarse</a> 
                                    <a href="#" class="btn btn-outline-dark"  >Iniciar Sesión</a>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;