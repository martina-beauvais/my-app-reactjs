import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';

const Item = ({item}) => {
    return (
        <div className="card" style={{width: 18 + 'rem'}} id={item.id}>
            <img src={item.img} className="card-img-top"/>
            <div className="card-body">
                <h4 className="card-title">{item.title}</h4>
                <h6 className='card-text'>{item.author}</h6>
                <p className="card-text">${item.price}</p>
                <Link to={`/item/${item.id}`} >
                    <button className="btn btn-circle-two">
                        Ver 
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Item