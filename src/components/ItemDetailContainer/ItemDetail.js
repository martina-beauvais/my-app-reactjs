import React from 'react';
import ItemCount from './itemCout/ItemCount';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify'
import './itemDetail.css'

const ItemDetail = ( {products } ) => {
    const [valor, setValor] = useState(0)

    function onAdd(valor){
        
        toast(`Agregaste ${valor} cortina(s) al carrito`, {
        position: "top-right",
        autoClose: 1700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    return (
        <div className='detallesProducto'>
            <h2>Detalles del producto</h2>
            <div className="card" style={{width: 18 + 'rem'}} id={products.id}>
                <img className="card-img-top" src={products.img} alt="" />
                <div className="card-body">
                    <h3 className="card-title"> {products.title} </h3>
                    <p className="card-text"> $ {products.price} </p>
                    <p> {products.description} </p>
                    {
                        valor == 0 ? 
                        <ItemCount stock={products.stock} onAdd={()=>{setValor()}} />
                        : 
                        <div>
                            <Link to='/cart/'>
                                <button className='btn btn-circle-two'>
                                    Terminar compra
                                </button>
                            </Link>
                            <hr/>
                            <Link to='/'>
                                <button className='btn btn-circle-two'>
                                    Continuar comprando
                                </button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
        
    )
}

export default ItemDetail