import './App.css';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import './app/style.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {getItem} from './productos'

function App() {
  const [item, setItem] = useState({});
  useEffect(() =>{
    getItem().then(data => setItem(data))
  })
  return (
    <div>
      <NavBar/>
      <ItemListContainer 
      greeting={'Bievenido a Cornelia Street'} 
      description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae vestibulum purus. Cras luctus lacus.'}/>
      <ItemDetailContainer item={item}/>
    </div>
  );
}

export default App;
