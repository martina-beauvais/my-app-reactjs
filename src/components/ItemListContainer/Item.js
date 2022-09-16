import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({id, imagen, title, price}) => {
    return (
        <div className="card" style={{width: 18 + 'rem'}} id={id}>
            <img src={imagen} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">${price}</p>
                <Link to={`/item/${id}`} >
                    <button className="btn btn-circle-two">
                        Ver 
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Item