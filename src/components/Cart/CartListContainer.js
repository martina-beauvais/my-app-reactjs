import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartEmpty from './CartEmpty'
import CartItemList from './CartItemList';

const CartListContainer = () => {
    const {carrito} = useContext(CartContext)
    return (
        <div className="contenedorListCarrito">
            <h1>Carrito de compras</h1>
            {carrito.length > 0 ? <CartItemList/> : <CartEmpty/>}
            
        </div>
    )
}

export default CartListContainer