// Note Taking Application - CRUD Operations
// Create, Read, Update, Delete

import React, { useEffect, useState } from 'react';
import Note from './components/Note';
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  // make the api request
  useEffect(() => {
    axios
      .get('https://be-sa97.onrender.com/api/notes')
      .then(response => {
        setNotes(response.data);
      })
  }, [notes]);

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true);

  // addNote function
  const addNote = (event) => {
    event.preventDefault();
    // console.log('button clicked', event.target);
    
    // create the new note object
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    };

    // append it to the notes state
    // setNotes(notes.concat(noteObject));
    axios
      .post('https://be-sa97.onrender.com/api/notes', noteObject)
      .then(response => {
        // console.log(response);
        // after a creating a new resource
        // update the state
        setNotes(notes.concat(response.data));
        setNewNote('');
      });

    // clear the newNote state
    setNewNote('');
  }

  // handleNoteChange handler function
  const handleNoteChange = (event) => {
    // console.log(event.target.value);
    setNewNote(event.target.value);
  }

  const toggleImportanceOf = (id) => {
    // console.log('importance of ' + id + ' needs to be toggled');
    const url = `https://be-sa97.onrender.com/api/notes/${id}`;
    const note = notes.find(n => n.id === id);
    const changedNote = {
      ...note,
      important: !note.important
    };

    // make the api request
    axios
      .put(url, changedNote)
      .then(response => {
        setNotes(notes.map(note => {
          // return the entire original array or
          // the updated
          return note.id !== id ? note : response.data;
        }));
      });
  }

  const deleteNoteHandler = (id) => {
    // console.log(id);
    const url = `https://be-sa97.onrender.com/api/notes/${id}`;
    axios
      .delete(url)
      .then(response => {
        setNotes(notes.filter(note => {
          return note.id !== id;
        }))
      })
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {
          notesToShow.map(
            note => <Note
              key={note.id}
              note={note} 
              toggleImportance={() => toggleImportanceOf(note.id)}
              deleteNote={() => deleteNoteHandler(note.id)}
              />
          )
        }
      </ul>

      <form onSubmit={addNote}>
        <input value={ newNote } onChange={handleNoteChange} placeholder='a new note...'/>
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App;
