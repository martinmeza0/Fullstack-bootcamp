import './App.css';
//importamos el componente que creamos
import Contador from './components/contador'
function App() {
  return (
    <div className="App">
      <h1>titulo de nuestro primer proyecto</h1>
      {/* renderizamos el componente que importamos como si fuera un elemento de html */}
      <Contador></Contador>
    </div>
  );
}

export default App;
