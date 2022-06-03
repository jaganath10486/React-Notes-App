import React, {useReducer, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import AppContext from './Context/AppContext';
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import SideBar from './Components/SideBar';
import Lists from './Components/Lists';

const reducerFunction1 = (state, action) => {
  switch(action.type)
  {
    case 1:
      return state;
  }
}


const reducerFunction2 = (state, action) => {
  switch(action.type)
  {
    case 1:
      return state;
  }
}


function App() {
  const initialState1 = [
    {
      id : 1,
      title : 'Class',
      date : '02/06/2022',
      text : " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,",
      ListId : 1
    },
    {
      id : 2,
      title : 'Class',
      date : '02/06/2022',
      text : " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, ",
      ListId : 2
    },
    {
      id : 3,
      title : 'Class',
      date : '02/06/2022',
      text : " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, ",
      ListId : 3
    }

  ]

  const initialState2 = [
    {
      id : 2,
      title : 'physics',
      icon : 'a'
    },
    {
      id : 3,
      title : 'physics',
      icon : 'a'
    },
    {
      id : 4,
      title : 'physics',
      icon : 'a'
    }
  ]

  const [lists, dispatch2] = useReducer(reducerFunction2, initialState2);
  const [notes, dispatch1] = useReducer(reducerFunction1, initialState1);
  const [ListNotes, setListNotes] = useState(notes);

  const handleList = (id = 2) => 
  {
    console.log('clicked')
    console.log(id);
    let items = notes.filter(note => (note.ListId === id));
    setListNotes(items);
  }
 

  return (
    <div className="App">
      <header className='header'>
        <h1 className="text-center">Notes App</h1>
      </header>
      <div className='container d-flex justify-content-between'>
        <AppContext.Provider value={{lists, notes, dispatch1, dispatch2}}>
          <SideBar handleList = {handleList} />
          <Lists items = {ListNotes}/>
        </AppContext.Provider>
        
      </div>
    </div>
  );
}

export default App;
