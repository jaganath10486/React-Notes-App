import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'
import List from './List';

function Lists({items}) 
{
  console.log(items);

  return (
       <div className='row row-cols-auto mt-3'>
        {
            items.map(Note => ( <List key = {Note.id} title = {Note.title} text = {Note.text} date = {Note.date}/> ))
        }
    </div>
   
  )
}

export default Lists