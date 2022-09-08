import React from 'react';
import ItemCount from './ItemCount'

const Item = ({id, imagen, title, price,stock}) => {
    return (
        <div className="card" style={{width: 18 + 'rem'}} key={id}>
            <img src={imagen} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">${price}</p>
                <ItemCount stock={stock} onAdd={ (valor) => alert(`Se han añadido ${valor} productos`)}/>
                <a href="#" className="btn btn-primary">Ver detalles</a>
            </div>
        </div>
    )
}

export default Item