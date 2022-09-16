import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({id,imagen,title,price,description,stock}) => {
    return (
        <div className='detallesProducto'>
            <h2>Detalles del producto</h2>
            <div className="card" style={{width: 18 + 'rem'}} key={id}>
                <img src={imagen} className="card-img-top"/>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">${price}</p>
                    <p className="card-text">{description}</p>
                    <ItemCount stock={stock} onAdd={ (valor) => alert(`Se han añadido ${valor} productos`)}/>
                </div>
            </div>
        </div>
        
    )
}

export default ItemDetail