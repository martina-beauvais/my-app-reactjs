import products from '../../products';
import { useParams } from 'react-router-dom';

const getItemDetail = () => new Promise ((res) =>{
    const {id} = useParams();
    setTimeout(() => res(products.find(product=>product.id === Number(id))
    ),1500)
})

export default getItemDetail