import React, { useContext, useState } from 'react';
import ItemCount from './itemCount/ItemCount';
import { Link } from 'react-router-dom';
import './itemDetail.css';
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';

const ItemDetail = ( { products } ) => {
    const [valor, setValor] = useState(true)
    const {addToCart} = useContext(CartContext)
    function onAdd(valor){
        if(valor < 1){
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                background: '#FACE4D',
                color: 'black',  
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: false,
            })
            Toast.fire({
                icon: 'error',
                title: 'Debes añadir por lo menos 1 producto'
            });
        }else{
            addToCart(products, valor)
            Swal.fire(`${valor} Producto(s) añadido(s)`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: false,
                });
                setValor(false)
        }
    }
    return (
    <>
        <div class="row row-cols-md-2 g-2" id='detallesProducto'>
            <div class="card" style={{width: 20 + 'rem'}} key={products.id}>
                <img src={products.img} class="card-img-top" alt="" /> 
                <div class="card-body">
                    <h3 className="card-title"> {products.title} </h3>
                    <h5> {products.author} </h5>
                    <p className="card-text"> $ {products.price} </p>
                    {
                        valor ? 
                        <ItemCount stock={products.stock} onAdd={onAdd}/>
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
            <div className='card' style={{width: 20 + 'rem'}}>
                <div class="card-body">
                    <p className='reseña'> {products.description} </p>
                    <p className='reseña'> {products.details} </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default ItemDetail