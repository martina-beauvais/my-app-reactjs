import React, { useState, useEffect } from 'react'
import { getItem } from '../../productos/productos.js'
import ItemDetail from './ItemDetail.js'

const ItemDetailContainer = ({item}) => {
    const [ productos, setProductos ] = useState({})
    useEffect(() => {
        setTimeout((resolve) => {
            getItem().then((productos) => {
                setProductos(productos)
            })
        },4000)
        
    },[])
    return (
        <ItemDetail item={productos}/>
    )
}

export default ItemDetailContainer