{/* NUEVA API DE PRODUCTOS PARA LA PRIMERA ENTREGA */}
import imagen1 from './assets/imagenes/vela-soja.png'
import imagen2 from './assets/imagenes/vela-lavanda.png'
import imagen3 from './assets/imagenes/vela-limited-edition-madera-y-ambar.png'
{/* hay productos en el medio que decidí sacar por el momento para no insertar tanto código */}
import imagen16 from './assets/imagenes/serum-anti-manchas.png'
import imagen17 from './assets/imagenes/serum-reafirmante.png'
import imagen18 from './assets/imagenes/serum-exfoliante.png'

const products = [
    { id: 1, title: "Vela de soja", description: "Vela aromatica de soja hecha con aceites escenciales y naturales.", category: "candle", price: 764, stock: 10,  imagen: imagen1},
    { id: 2, title: "Vela de lavanda", description: "Vela aromatica de soja hecha con aceites escenciales y naturales.", category: "candle",price: 356,stock: 1500,imagen: imagen2},
    { id: 3, title: "Vela de madera y ámbar ", description: "Vela aromatica de soja hecha con aceites escenciales y naturales.", category: "candle",price: 988, stock: 170, imagen: imagen3},
    { id: 16, title:  "Serum facial ácido hialurónico", description:"Serum...", category: "serum", price: 1500, stock: 4547, imagen: imagen16},
    { id: 17, title: "Serum facial reafirmante", description: "Serum...", category: "serum", price: 1500, stock: 4547, imagen: imagen17},
    { id: 18, title: "Serum facial exfoliante", description: "Serum...", category: "serum", price: 1500, stock: 4547, imagen: imagen18}
]
export default products