import './App.css';
import Titulo from './message';




const Descripcion = () => {
  return <p>App curso fullstack</p>
}

const App = () => {

  const a = 2
  const b = 3  

  return (
    <div className="App"> 
    <Titulo color = 'red' message = 'Estamos en un curso de React'/>
    <Descripcion/>
      <div>
        <p>el resultado es: </p>
        {a+b}
      </div>
      
    </div>
  );
}

export default App;
