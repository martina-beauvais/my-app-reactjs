import imagen1 from './assets/imagenes/vela-soja.png'
import imagen2 from './assets/imagenes/vela-lavanda.png'
import imagen3 from './assets/imagenes/vela-limited-edition-madera-y-ambar.png'
import imagen4 from './assets/imagenes/vela-frutos-rojos.png'
import imagen5 from './assets/imagenes/vela-cafe.png'
import imagen6 from './assets/imagenes/vela-vainilla.png'
import imagen7 from './assets/imagenes/vela-te-verde.png'
import imagen8 from './assets/imagenes/vela-coco.png'
import imagen9 from './assets/imagenes/vela-manzana-canela.png'
import imagen10 from './assets/imagenes/vela-limon.png'
import imagen11 from './assets/imagenes/vela-maracuya.png'
import imagen12 from './assets/imagenes/vela-arandano.png'
import imagen13 from './assets/imagenes/serum-vitamina-c.png'
import imagen14 from './assets/imagenes/serum-reparador.png'
import imagen15 from './assets/imagenes/serum-acido-hialurónico.png'
import imagen16 from './assets/imagenes/serum-anti-manchas.png'
import imagen17 from './assets/imagenes/serum-reafirmante.png'
import imagen18 from './assets/imagenes/serum-exfoliante.png'

class Producto {
    constructor(id, title, description, category, price, stock, imagen) {
        this.id =id, 
        this.title = title,
        this.description = description,
        this.category = category,
        this.price = price, 
        this.stock = stock,
        this.imagen = imagen
    }
}
export const getProductos = () => {
const task = new Promise ((resolve) => {
    setTimeout(() => {
    const productos = [
        new Producto ( 1, "Vela de soja", "Vela aromatica de soja hecha con aceites escenciales y naturales.","candle", 764, 10, imagen1), 
        new Producto ( 2, "Vela de lavanda", "Vela aromatica de soja hecha con aceites escenciales y naturales.", "candle",356, 1500, imagen2),
        new Producto ( 3, "Vela de madera y ámbar ", "Vela aromatica de soja hecha con aceites escenciales y naturales.","candle", 988, 170, imagen3),
        new Producto ( 4, "Vela de frutos rojos", "Vela aromatica de soja hecha con aceites escenciales y naturales.","candle", 789, 543, imagen4), 
        new Producto ( 5, "Vela café", "Vela aromatica de soja hecha con aceites escenciales y naturales.","candle", 698, 865, imagen5), 
        new Producto ( 6, "Vela de vainilla", "Vela aromatica de soja hecha con aceites escenciales y naturales.","candle", 970, 345, imagen6),
        new Producto ( 7, "Vela de té verde", "Vela...","candle", 650, 6458, imagen7),
        new Producto ( 8, "Vela de coco", "Vela...","candle", 850, 6458, imagen8),
        new Producto ( 9, "Vela de manzana y canela", "Vela...","candle", 800, 6458, imagen9),
        new Producto ( 10, "Vela de limón", "Vela...","candle", 800, 6458, imagen10),
        new Producto ( 11, "Vela de maracuya", "Vela...","candle", 700, 9568, imagen11),
        new Producto ( 12, "Vela de arandono", "Vela...","candle", 890, 8564, imagen12),
        new Producto ( 13, "Serum de vitamina C ", "Serum...", "serum",890, 8564, imagen13),
        new Producto ( 14, "Serum reparador facial", "Serum...", "serum", 1500, 4547, imagen14),
        new Producto ( 15, "Serum facial ácido hialurónico", "Serum...", "serum", 1500, 4547, imagen15),
        new Producto ( 16, "Serum facial ácido hialurónico", "Serum...", "serum", 1500, 4547, imagen16),
        new Producto ( 17, "Serum facial reafirmante", "Serum...", "serum", 1500, 4547, imagen17),
        new Producto ( 18, "Serum facial exfoliante", "Serum...", "serum", 1500, 4547, imagen18)
        ]
        resolve(productos)
    },2000);
})
return task;
}

export const getItem = () => new Promise ((resolve,reject) => {
    setTimeout(() => resolve(
        { id: 1, title: "Vela de soja", description: "Vela aromatica de soja hecha con aceites escenciales y naturales.", category: "candle", price: 764, stock: 10,  imagen: imagen1},
        { id: 2, title: "Vela de lavanda", description: "Vela aromatica de soja hecha con aceites escenciales y naturales.", category: "candle",price: 356,stock: 1500,imagen: imagen2},
        { id: 3, title: "Vela de madera y ámbar ", description: "Vela aromatica de soja hecha con aceites escenciales y naturales.", category: "candle",price: 988, stock: 170, imagen: imagen3},
    ),3000)
})