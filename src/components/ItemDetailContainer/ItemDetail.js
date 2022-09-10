import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({item}) => {
    return (
        <div>
            <h2>Detalles del producto</h2>
            <div className="card" style={{width: 18 + 'rem'}} key={item.id}>
                <img src={item.imagen} className="card-img-top"/>
                <div className="card-body">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-text">${item.price}</p>
                    <p>{item.description}</p>
                    <ItemCount stock={item.stock} onAdd={ (valor) => alert(`Se han añadido ${valor} productos`)}/>
                </div>
            </div>
        </div>
        
    )
}

export default ItemDetail