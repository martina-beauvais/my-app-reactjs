import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartBanner from './CartBanner';
import CartEmpty from './CartEmpty'
import CartItemList from './CartItemList';

const CartListContainer = () => {
    const {carrito} = useContext(CartContext)
    return (
        <div className="contenedorListCarrito">
            <CartBanner/>
            {carrito.length > 0 ? <CartItemList/> : <CartEmpty/>}
        </div>
    )
}

export default CartListContainer