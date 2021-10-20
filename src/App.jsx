import './App.css';
import {useState, useEffect, createContext} from 'react';
import Note from './components/Note'
import axios from "axios";
import { getNotes } from './services/getNotes';
import { postNotes } from './services/postNotes';
// useEffect - hook, se ejecuta cada vez que se renderiza un componente
// map()  - transforma el valor, devuelve c/u de los elementos transformados
//key - ayuda a react para que cada vez que se renderize saber donde se tiene que conservar ese componente
//se considera mala practica el math.random() y el index dentro de una key, la mejor opcion. usar el id que trae el array x cada elemento

function App(props) {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  // const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    getNotes()
      .then((notes) => {
        setNotes(notes)
      })
  }, []);

  const handleChange = (e) => {
    setNewNote(e.target.value);
    console.log(newNote);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("crear nota");

    const AddNote = {
      title: newNote,
      body: newNote,
      userId: 1
    };

    postNotes(AddNote)
      .then(newNote => {
        setNotes((prevNotes) => prevNotes.concat(data))
      })

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
      <ol> 
          {notes
            .map((note) => (
              <Note  key={note.id} {...note}/>
            ))
          }
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote}></input>
        
        <button>Crear Nota</button> {/* el ultimo boton de un formulario, por defecto, funciona como un submit por cuestiones semanticas */}
      </form>
    </>
  );
}

export default App;