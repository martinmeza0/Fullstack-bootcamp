import './App.css';
import {useState, useEffect} from 'react';
import Note from './Note'
import {
  getAll as getNotes, 
  Create as postNotes
} from './services/notes'


function App(props) {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  useEffect(() => {
    console.log("useEffect")
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
        setNotes((prevNotes) => prevNotes.concat(newNote))
      })

    setNewNote('');
  }

  return (
    <>
      <h1>Notas</h1> 
      <ol> 
          {notes
            .map((note) => (
              <Note  key={note.id} {...note}/>
            ))
          }
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote}></input>
        
        <button>Crear Nota</button>
      </form>
    </>
  );
}

export default App;