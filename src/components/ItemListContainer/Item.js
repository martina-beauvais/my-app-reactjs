import React from 'react';

const Item = ({id, imagen, title, price}) => {
    return (
        <div className="card" style={{width: 18 + 'rem'}} key={id}>
            <img src={imagen} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">${price}</p>
                <a href="#" className="btn btn-circle-two">Ver detalles</a>
            </div>
        </div>
    )
}

export default Item