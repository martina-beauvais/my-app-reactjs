import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'
import './cart.css'

const CartItemList = () => {
    const {carrito, totalPrice, cleanCart} = useContext(CartContext)

    return (
        <>
            { carrito.map(product => <CartItem key={product.id} product={product}/> )}
            <button onClick={() => cleanCart()} className='btn btn-circle-cleanCart'> Eliminar productos </button>
            <h4 className='totalPrice'> Total: $ { totalPrice() } </h4>

        </>
    )
}

export default CartItemList