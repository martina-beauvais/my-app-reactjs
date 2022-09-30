import React from 'react';
import fotoBanner from '../assets/extras/banner.png'
import gifInter from '../assets/extras/27-globe-flat.gif'
import gifBox from '../assets/extras/box.gif'
import gifSeller from '../assets/extras/bestSeller.gif'
import './Pages.css'

const Home = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={fotoBanner} className="banner" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={fotoBanner} className="banner" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={fotoBanner} className="banner" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container-section">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-4">
                            <div>
                                <img src={gifSeller} className="gif"/>
                            </div>
                            <h5>                        
                                Productos con la mejor calidad
                            </h5>
                        </div>
                        <div className="col-4">
                            <div>
                                <img src={gifBox} className="gif"/>
                            </div>
                            <h5>
                                Envíos sin costo
                            </h5>
                        </div>
                        <div className="col-4">
                            <div>
                                <img src={gifInter} className="gif"/>
                            </div>
                            <h5>
                                Productos internacionales
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home