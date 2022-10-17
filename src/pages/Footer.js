import React from 'react';
import gifFooter from '../assets/extras/gif-footer.gif';
import { Link } from 'react-router-dom';
import './Pages.css';

const Footer = () => {
    return (
        <>  
        <div className=" row align-items-center">
            <img src={gifFooter} className='gif'/>
            <div className="col col-6">
                <h3 className="explora">Explora</h3>
                <dt className='categories'>
                    <dd className="item-one">
                        <Link to='/'>
                            Inicio
                        </Link>
                    </dd>
                    <dd className="item-one">
                        <Link to='/category/candle'>
                            Candles
                        </Link>
                    </dd>
                    <dd className="item-one">
                        <Link to='/category/book'>
                            Libros
                        </Link>
                    </dd>
                    <dd className="item-one">
                        <Link to='/category/boxes'>
                            Boxes
                        </Link>
                    </dd>
                </dt>
            </div>
            <div className="col col-6">
                <h3 className="explora">Contacto</h3>
                <dt className='categories'>
                    <dd className="item-two">
                        <a target="_blank" href="https://mail.google.com/mail/u/0/?pli=1" className="footer__nav">
                            Email
                        </a>
                    </dd>
                    <dd className="item-two">
                        <a target="_blank" href="https://twitter.com/home" className="footer__nav">
                            Twitter
                        </a>
                    </dd>
                    <dd className="item-two">
                        <a target="_blank" href="https://www.instagram.com/?hl=es-la" className="footer__nav">
                            Instagram
                        </a>
                    </dd>
                    <dd className="item-two">
                        <a target="_blank" href="https://www.facebook.com/?hl=es-la" className="footer__nav">
                            Facebook
                        </a>
                    </dd>
                </dt>
            </div>
        </div>
            <div className="copyright">
                Cornelia Street &copy; 2022 
                <hr className="hr"/>
                <i className="bi bi-github"></i> Creado por Martina Beauvais
            </div>
        </>
        
    )
}

export default Footer