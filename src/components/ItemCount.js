import React from 'react';
import { useState } from 'react';

const ItemCount = ({stock, valorInicial = 0,onAdd}) => {
    const [valor, setValor] = useState(valorInicial);

    return (
        <>
        <div className='contador'>
            <button onClick={() => {
                valor > valorInicial ? setValor(valor - 1) : setValor(valorInicial)}}>
                -
            </button>
            <p> {valor} </p>
            <button onClick={() => {
                valor < stock ? setValor(valor + 1) : setValor(stock)}}>
                +
            </button>
            <button clasName='botonAñadir' onClick={() => onAdd(valor)}>
                Añadir al carrito
            </button>
        </div>
        </>
    )
}
export default ItemCount