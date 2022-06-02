import React, {useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';
import AppContext from './Context/AppContext';
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      id : uuidv4(),
      title : 'Class',
      date : '02/06/2022',
      text : 'How are u doing i am doing fine'
    }
  ]

  const initialState2 = [
    {
      id : uuidv4(),
      title : 'physics',
      icon : 'a'
    }
  ]

  const [lists, dispatch2] = useReducer(reducerFunction2, initialState2);
  const [notes, dispatch1] = useReducer(reducerFunction1, initialState1);

  return (
    <div className="App">
      <header className='header'>
        <h1 className="text-center">Notes App</h1>
      </header>
    </div>
  );
}

export default App;
