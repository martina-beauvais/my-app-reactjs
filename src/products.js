import img1 from './assets/imagenes/vela-soja.png'
import img2 from './assets/imagenes/vela-lavanda.png'
import img3 from './assets/imagenes/vela-limited-edition-madera-y-ambar.png'
import img16 from './assets/imagenes/serum-anti-manchas.png'
import img17 from './assets/imagenes/serum-reafirmante.png'
import img18 from './assets/imagenes/serum-exfoliante.png'

const products = [
    { id: 1, title: "Vela de soja", description: "Vela aromatica de soja hecha con aceites escenciales y naturales.", category: "candle", price: 764, stock: 10,  img: img1},
    { id: 2, title: "Vela de lavanda", description: "Vela aromatica de soja hecha con aceites escenciales y naturales.", category: "candle",price: 356,stock: 1500,img: img2},
    { id: 3, title: "Vela de madera y ámbar ", description: "Vela aromatica de soja hecha con aceites escenciales y naturales.", category: "candle",price: 988, stock: 170, img: img3},
    { id: 16, title:  "Serum facial ácido hialurónico", description:"Serum...", category: "serum", price: 1500, stock: 4547, img: img16},
    { id: 17, title: "Serum facial reafirmante", description: "Serum...", category: "serum", price: 1500, stock: 4547, img: img17},
    { id: 18, title: "Serum facial exfoliante", description: "Serum...", category: "serum", price: 1500, stock: 4547, img: img18}
]

{/* NUEVA API DE PRODUCTOS PARA LA PRIMERA ENTREGA */}
{/* hay productos en el medio que decidí sacar por el momento para no insertar tanto código */}

export default products