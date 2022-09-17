import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail.js'
import product from '../../products';

const ItemDetailContainer = () => {
    const {itemId} = useParams()
    const [ item, setItem ] = useState({})
    useEffect(() => {
        const getItemDetail = () => new Promise ((res,rej) => { 
            setTimeout(() => 
                res(product),
            /*res(products.find(product => product.id === Number(itemId))),1500)*/
            900)
        })
        getItemDetail().then(res => setItem(res.find((product) => Number(product.id )=== Number(itemId))))
    },[])

    return (
        <div className='contenedorItemDetail'>
            <ItemDetail products={product}/>
        </div>
    )
}

export default ItemDetailContainer