import React from 'react';
import Item from './Item';

const ItemList = ({productos}) => {
    return (
        <>
            {
                productos.map(item => 
                    <Item 
                    item={item} 
                    key={item.id}
                    imagen={item.imagen}
                    title={item.title}
                    price={item.price}
                    stock={item.stock}/>          
                )
            }
        </>
    )
}

export default ItemList