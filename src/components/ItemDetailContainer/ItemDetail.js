import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ( {products} ) => {
    return (
        <div className='detallesProducto'>
            <h2>Detalles del producto</h2>
            <div className="card" style={{width: 18 + 'rem'}} id={products.id}>
                <img className="card-img-top" src={products.img} alt="" />
                <div className="card-body">
                    <h3 className="card-title"> {products.title} </h3>
                    <p className="card-text"> $ {products.price} </p>
                    <p> {products.description} </p>
                    <ItemCount stock={products.stock} onAdd={ (valor) => alert(`Se han añadido ${valor} productos`)}/>
                </div>
            </div>
        </div>
        
    )
}

export default ItemDetail