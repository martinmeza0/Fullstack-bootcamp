import './App.css';
import {useState, useEffect} from 'react';
import Note from './components/Note'
import axios from "axios";
// useEffect - hook, se ejecuta cada vez que se renderiza un componente
// map()  - transforma el valor, devuelve c/u de los elementos transformados
//key - ayuda a react para que cada vez que se renderize saber donde se tiene que conservar ese componente
//se considera mala practica el math.random() y el index dentro de una key, la mejor opcion. usar el id que trae el array x cada elemento




function App(props) {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  // const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
          console.log(response);
      });
  }, []);

  const handleChange = (e) => {
    setNewNote(e.target.value);
    console.log(newNote);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("crear nota");
    const AddNote = {
      id: notes.length + 1,
      title: newNote,
      body: newNote
      // date: new Date().toISOString(),
      // important: Math.random() < 0.5
    };
    console.log(AddNote);

    //concat - añade lo que escribimos al array notes
    setNotes(notes.concat(AddNote));
    setNewNote('');
  }

  // const handleShowAll = () => {
  //   setShowAll(() => !showAll);
  // }

  return (
    <>
      <h1>Notas</h1> 
      {/* <button onClick={handleShowAll}> 
        {showAll ? 'Show only important' : 'Show All'}
      </button> */}
      <ul> 
          {notes
            // .filter((note) => {
            //   if (showAll) return true;
            //   return note.important === true;
            // })
            .map((note) => (
              <Note  key={note.id} {...note}/>
              // <NoteComponent key={note} {...note} />  -  mala practica, no controlas lo que le llega a tu componente
            ))
          }
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote}></input>
        
        <button>Crear Nota</button> {/* el ultimo boton de un formulario, por defecto, funciona como un submit por cuestiones semanticas */}
      </form>
    </>
  );
}

export default App;
