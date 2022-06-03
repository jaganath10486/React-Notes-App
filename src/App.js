import React, {useEffect, useReducer, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import AppContext from './Context/AppContext';
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import SideBar from './Components/SideBar';
import Lists from './Components/Lists';

const reducerFunction1 = (state, action) => {
  let updatedNotes = [];
  switch(action.type)
  {
    case 'DELETE':
      updatedNotes = state.filter(note => (note.id !== action.value));
      return updatedNotes;

    case 'ADD':
      return [...state, action.value];
    default:
      return state;
  }
}


const reducerFunction2 = (state, action) => {
  switch(action.type)
  {
    case 'ADD':
      return [...state, action.value]
      
    default:
      return state
  }
}


function App() {
  const initialState1 = []

  const initialState2 = [
    {
      id : 1,
      title : 'CS'
    },
    {
      id : 2,
      title : 'Chemistry'
    }
  ]

  const [lists, dispatch2] = useReducer(reducerFunction2, initialState2);
  const [notes, dispatch1] = useReducer(reducerFunction1, initialState1);
  const [ListNotes, setListNotes] = useState(notes);
  const [id, setId]= useState(1);
  //console.log(notes);

  useEffect(() => {
    console.log(id);
    let items = notes.filter(note => (note.ListId === id));
    setListNotes(items);
  }, [notes, id]);

 
  return (
    <div className="App">
      <header className='header'>
        <h1 className="text-center">Notes App</h1>
      </header>
      <div className='container d-flex justify-content-between'>
        <AppContext.Provider value={{lists, notes, dispatch1, dispatch2, setId, id}}>
          <SideBar />
          <Lists items = {ListNotes}/>
        </AppContext.Provider>        
      </div>
    </div>
  );
}

export default App;
