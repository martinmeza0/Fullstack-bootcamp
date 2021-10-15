import './App.css';
import {useState} from 'react';
import Note from './components/Note'
// map()  - transforma el valor, devuelve c/u de los elementos transformados
//key - ayuda a react para que cada vez que se renderize saber donde se tiene que conservar ese componente
//se considera mala practica el math.random() y el index dentro de una key, la mejor opcion. usar el id que trae el array x cada elemento

//debugar 
// console.log({notes}) 

function App() {
  const notes = [
    {
      id: 1,
      content: 'HTML is easy',
      date: '2019-05-30T17:30:31.098Z',
      important: true
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      date: '2019-05-30T18:39:34.091Z',
      important: false
    },
    {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      date: '2019-05-30T19:20:14.298Z',
      important: true
    }
  ]

// if ( (!notes) || (notes.length === 0) ) {
//   return 'no hay notas';
// }

  return (
    <ul> 
        {
        notes.map((note) => (
          <Note  key={note.id} id={note.id} content={note.content} date={note.date}/>
          // <NoteComponent key={note} {...note} />  -  mala practica, no controlas lo que le llega a tu componente
          ))
        }
    </ul>
  );
}

export default App;
