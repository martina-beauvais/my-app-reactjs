import React from 'react'

const ItemListContainer = ({greeting,description}) => {
    return (
    <div class="row">
        <div class="col-sm-7">
            <div class="card-banner">
                <div class="card-body">
                    <h1 class="card-title">{greeting}</h1>
                    <p class="card-text">{description}</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ItemListContainer