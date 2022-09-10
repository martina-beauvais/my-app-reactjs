import React from 'react'
import ItemList from './ItemList'
import { useState , useEffect} from 'react';
import { getProductos } from '../../productos/productos.js'


const ItemListContainer = ({greeting,description}) => {
    const [ productos, setProductos ] = useState([]);

    useEffect(() => {
        getProductos().then((data) => {
            setProductos(data)
        })
    },[])

    return (
        <>
    <div id='bienvenida'>
        <div className="col-sm-7">
            <div className="card-banner">
                <div className="card-body">
                    <h1 className="card-title">{greeting}</h1>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    </div>
    <ItemList productos={productos}/>
    </>
    )
}

export default ItemListContainer