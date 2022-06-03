import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AppContext from '../Context/AppContext'

function AddList() {
    
    const {dispatch2} = useContext(AppContext)

    const [flag, setFlag] = useState(false)
    const [text, setText] = useState('')
    
    const toggleFlag = () => {
        setFlag(!flag)
    }
    
    const addList = (event) => {
        event.preventDefault()
        dispatch2({
            type : 'ADD',
            value : {
                id : uuidv4(),
                title : text
            }
        })
        setText('')
        setFlag(!flag)
    }
  return (
    <div className='input mt-lg-3 border-top' style={{backgroundColor : 'transparent', cursor : 'pointer'}}>
        {
            !flag ? (
                <div className='addList' onClick={toggleFlag}>
                    <i className="fa fa-plus" aria-hidden="true" style={{marginRight : '10px', fontSize : '20px'}}></i>
                    <span>New List</span>
                </div>
            ) : (
                <form onSubmit={addList}>
                    <div className="mb-3">
                        <input type="text" required className="form-control border-0" id="inputText" value={text} onChange={(event) => {setText(event.target.value)}} />
                    </div>
                </form>
            )
        }
    </div>
  )
}

export default AddList