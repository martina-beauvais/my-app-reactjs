import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './app/style.css';


function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer 
      greeting={'Bievenido a Delicate'} 
      description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae vestibulum purus. Cras luctus lacus.'}/>
    </div>
  );
}

export default App;
