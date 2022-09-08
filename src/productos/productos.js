import imagen1 from './imagenes/vela-lavanda.png'
import imagen2 from './imagenes/vela-soja.png'
import imagen3 from './imagenes/vela-limited-edition-madera-y-ambar.png'
import imagen4 from './imagenes/vela-frutos-rojos.png'
import imagen5 from './imagenes/vela-cafe.png'
import imagen6 from './imagenes/vela-vainilla.png'


class Producto {
    constructor(id,title,description,price,stock,imagen){
        this.id =id, 
        this.title = title,
        this.description = description,
        this.price = price, 
        this.stock = stock,
        this.imagen = imagen
    }
}
export const getProductos = () => {
const task = new Promise ((resolve) => {
    setTimeout(() => {
    const productos = [
        new Producto (
            1,
            "Vela de soja",
            "Vela aromatica de soja hecha con aceites escenciales y naturales.",
            764,
            10,
            imagen2), 
        new Producto ( 
            2,
            "Vela de lavanda",
            "Vela aromatica de soja hecha con aceites escenciales y naturales.",
            356,
            1500,
            imagen1),
        new Producto (
            3,
            "Vela de madera y ámbar ",
            "Vela aromatica de soja hecha con aceites escenciales y naturales.",
            988,
            170,
            imagen3
        ),
        new Producto (
            4,
            "Vela de frutos rojos",
            "Vela aromatica de soja hecha con aceites escenciales y naturales.",
            789,
            543,
            imagen4), 
        new Producto (
            5,
            "Vela café",
            "Vela aromatica de soja hecha con aceites escenciales y naturales.",
            698,
            865,
            imagen5), 
        new Producto (
            6,
            "Vela de vainilla",
            "Vela aromatica de soja hecha con aceites escenciales y naturales.",
            970,
            345,
            imagen6), ]
        resolve(productos)
    },2000);
})
return task;
}