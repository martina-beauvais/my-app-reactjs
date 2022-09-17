import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ( {id, title, price, description, stock, img} ) => {
    return (
        <div className='detallesProducto'>
            <h2>Detalles del producto</h2>
            <div className="card" style={{width: 18 + 'rem'}} id={id}>
                <img className="card-img-top" src={img} alt=""/>
                <div className="card-body">
                    <h3 className="card-title"> {title} </h3>
                    <p className="card-text"> $ {price} </p>
                    <p className="card-text"> {description} </p>
                    <ItemCount stock={stock} onAdd={ (valor) => alert(`Se han añadido ${valor} productos`)}/>
                </div>
            </div>
        </div>
        
    )
}

export default ItemDetail