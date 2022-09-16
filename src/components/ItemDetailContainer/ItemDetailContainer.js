import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail.js'
import { useParams } from 'react-router-dom'
import products from '../products.js'

const ItemDetailContainer = () => {
    const {id} = useParams()

    const [ item, setItem ] = useState([])

    useEffect(() => {
        const getItemDetail = () => new Promise ((res,rej) => { 
            setTimeout(() => res(products.find(product => product.id === Number(id))),1500)
        })
        getItemDetail()
        .then(res => setItem(res))

        },[id])

    return (
        <div className='contenedorItemDetail'>
            <ItemDetail {...item}/>
        </div>
    )
}

export default ItemDetailContainer