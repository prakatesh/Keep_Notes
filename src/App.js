import React, { useState } from 'react';
import './App.css';
import Note from './component/Note';
import Area from './component/area';
import { Route,Routes } from 'react-router-dom';
import Archive from './component/Archive';

function App() {

  const [id,setid]=useState(0)
  
  const [notes, setNotes] = useState([]);
  const [archivenote,setarchive]=useState([]);

  function addNote(newNote){
    newNote.id=id;
    setNotes((prevValue) => {
      return [...prevValue, newNote]
    })
    setid(id+1)
  }

  function deleteNote(id){
    setNotes(prevValue => {
      return [...prevValue.filter((note)=>
        note.id !== id)]
    })
  }

  //archive
  function addarchive(notearchive)
  {
    notearchive.id=id
    setarchive(prevValue=>{
      return[...prevValue,notearchive]
    })
    setid(id+1)
  }

  function deletearchive(id){
    setarchive(prevValue => {
      return [...prevValue.filter((note)=>
        note.id !== id)]
    })
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<div><Area onAdd={addNote} onArchiveAdd={addarchive}/><Note value={notes} onDelete={deleteNote}/></div>}></Route>
        <Route path='/archive' element={<Archive value={archivenote} onDelete={deletearchive}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
