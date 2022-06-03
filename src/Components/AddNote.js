import React, { useContext, useState } from 'react'
import AppContext from '../Context/AppContext'
import { v4 as uuidv4 } from 'uuid';

function AddNote(props) {
    const {dispatch1} = useContext(AppContext);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const addItem = (event) => {
        const date = new Date();
        event.preventDefault();
        //console.log(new Intl.DateTimeFormat('en-US').format(date));
        setText('')
        setTitle('')
        dispatch1({
            type : 'ADD',
            value : {
                title,
                text,
                id : uuidv4(),
                ListId : props.id,
                date : new Intl.DateTimeFormat('en-US').format(date)
            }
        })
    }
  return (
            <div className='col'>
               <div className='card text-center'>
                <form onSubmit={addItem}>
                   <div className='card-header'>
                      <div className="mb-4" style={{transform : 'translateY(10px)'}}>
                        <input type="text" className="form-control border-secondary border-top-0" id="inputText" required minLength={3} maxLength={8} value={title} onChange={(event) => {setTitle(event.target.value)}} placeholder="enter Title Name" />
                      </div>
                    </div>
                    <div className='card-body '>
                      <div className="mb-3">
                        <textarea className="form-control border-top-0 " id="exampleFormControlTextarea1" rows="5" required  value={text} onChange={(event) => {setText(event.target.value)}} maxLength={350} ></textarea>
                        <button type="submit" className="btn btn-primary mt-3">Save</button>
                      </div>
                    </div>
                </form>
              </div>
            </div>
  )
}

export default AddNote