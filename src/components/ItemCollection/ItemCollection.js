import React from 'react';
import { Link } from 'react-router-dom';
import velaCollection from '../../assets/imagenes/vela-arandano.png'; 
import bookCollection from '../../assets/imagenes/Caraval Portada.png';
import boxCollection from '../../assets/imagenes/box escolmancia.png';
import './ItemCollection.css'


const ItemCollection = () => {
    return (
        <>
            <div className="card" style={{width: 18 + 'rem'}}>
                <img src={velaCollection} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">Velas</h5>
                    <Link to={`/category/candle`} >
                        <button className="btn btn-circle-two">
                            Ver productos
                        </button>
                    </Link>
                </div>
            </div>
            <div className="card" style={{width: 18 + 'rem'}}>
                <img src={bookCollection} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title"> Libros </h5>
                    <Link to={`/category/book`} >
                        <button className="btn btn-circle-two">
                            Ver productos
                        </button>
                    </Link>
                </div>
            </div>
            <div className="card" style={{width: 18 + 'rem'}}>
                <img src={boxCollection} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title"> Boxes </h5>
                    <Link to={`/category/boxes`} >
                        <button className="btn btn-circle-two">
                            Ver productos
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ItemCollection