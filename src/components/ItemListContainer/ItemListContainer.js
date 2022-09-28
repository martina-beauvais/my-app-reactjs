import React from 'react';
import ItemList from './ItemList';
import './itemListContainer.css'
import { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getItems } from '../../app/firebase-api';


const ItemListContainer = () => {
    const [ productos, setProductos ] = useState([]);

    const {categoryId} = useParams()

    useEffect(() => {
        {/*const getProductos = () => new Promise ((res) => {
            setTimeout(() => { 
                res(products)
            },1000)
        })*/}
        if(categoryId){
            getItems()
            .then(res => setProductos(res.filter((res) => res.category === categoryId)))
        }else{
            getItems()
            .then(res => setProductos(res))
        }
        
    },[categoryId])

    return (
        <>
    {/*<div id='bienvenida'>
        <div className="col-sm-7">
            <div className="card-banner">
                <div className="card-body">
                    <h1 className="card-title">{greeting}</h1>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    </div>*/}
    <ItemList productos={productos}/>
    </>
    )
}
export default ItemListContainer