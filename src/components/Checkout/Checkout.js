import React, {useState, useContext} from 'react';
import {CartContext} from '../context/CartContext';
import { createItem } from '../../app/firebase-api';
import './Checkout.css';
import checkoutBanner from '../../assets/extras/checkout-banner.png';
import Swal from 'sweetalert2';

const Ckechout = () => {
    const {carrito, totalPrice} = useContext(CartContext)
    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });
    const {name, email, phone, address} = buyer

    const InputData = (e) =>{
        const {name, value} = e.target
        setBuyer({...buyer, [name] : value})
    }
    const guardarDatos = () =>{
        const products = carrito.map((product) => { return ({id: product.id, title: product.title, category: product.category, price: product.price, quantify: product.quantify, author: product.author})});
        const date = new Date();
        const total = totalPrice();
        const obj = {buyer,products,date,total};

        createItem(obj).then(id=> {
            Swal.fire(`
                <h2> ¡Compra finalizada! </h2>  
                <h4> El número de tu compra es ${id} </h4>
                <h5> Se ha enviado a tu mail: ${buyer.email} los detalles de la compra </h5> 
                <h3>¡Muchas gracias por comprar en Cornelia Street!</h3>`
            )
        });
        setBuyer({name: "",email: "",phone: "",address: ""})
    }
    

    return (
        <>
        <img src={checkoutBanner} className='bannerProducts'/>
        <div className='Checkout'>
            <form  className='Formulario' onSubmit={guardarDatos}>
                
                <div className='input'>
                    <input type="text" name='name' placeholder='Ingrese su nombre...' value={name} onChange={InputData} required/>
                </div>
                <div className='input'>
                    <input type="text" name='email' placeholder='Ingrese su email...' value={email} onChange={InputData} required/>
                </div>
                <div className='input'>
                    <input type="number" name='phone' placeholder='Ingrese su telefono...' value={phone} onChange={InputData} required/>
                </div>
                <div className='input'>
                    <input type="text" name='address' placeholder='Ingrese su dirección...' value={address} onChange={InputData} required/>
                </div>
                <button className='btn btn-circle-sendProduct' type='submit' disabled={carrito.length > 0 ? null : true} >Mandar compra</button>
            </form>
        </div>
            
        </>
    )
}

export default Ckechout