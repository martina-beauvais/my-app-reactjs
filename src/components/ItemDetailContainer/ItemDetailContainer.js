import React, { useState, useEffect } from 'react'
import { getItem } from '../../productos.js'
import ItemDetail from './ItemDetail.js'

const ItemDetailContainer = ({item}) => {
    const [ productos, setProductos ] = useState({})
    useEffect(() => {
            getItem().then((productos) => {
                setProductos(productos)
            })
        },[])
    return (
        <ItemDetail item={productos}/>
    )
}

export default ItemDetailContainer