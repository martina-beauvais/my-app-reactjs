import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting,description}) => {
    return (
        <>
    <div className="row">
        <div className="col-sm-7">
            <div className="card-banner">
                <div className="card-body">
                    <h1 className="card-title">{greeting}</h1>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    </div>
    <ItemCount stock='10' onAdd={ (valor) => alert(`Se han añadido ${valor} productos`)}/>
    </>

    )
}

export default ItemListContainer