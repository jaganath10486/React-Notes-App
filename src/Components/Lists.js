import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'
import AddNote from './AddNote';
import List from './List';

function Lists({items}) 
{
  const {id} = useContext(AppContext);

  return (
       <div className='row row-cols-auto mt-3'>
        {
            items.map(Note => ( <List key = {Note.id} id = {Note.id} title = {Note.title} text = {Note.text} date = {Note.date}/> ))
        }
        <AddNote id = {id}/>
    </div>
   
  )
}

export default Lists