import React, { useContext } from 'react'
import AppContext from '../Context/AppContext'

function List(props) 
{
    const {dispatch1} = useContext(AppContext);

    const handleDelete = () => {
        //console.log('Clicked Delete Button');
        dispatch1({
            type : 'DELETE',
            value : props.id
        })
    }
  return (

    <div className='col-md-4'>
        <div className="card text-bg-primary mb-3">
           <div className="card-header d-flex justify-content-between" style={{cursor : 'pointer'}}>
               <span className='fs-6'>{props.date}</span>
               <span className='fs-1' style={{paddingRight : '40px'}}>{props.title}</span>
               <div className='icons'>
               <i className="fa fa-pencil-square-o" aria-hidden="true" style={{fontSize : '20px'}}></i>
               <i className="fa fa-trash" aria-hidden="true" style={{fontSize : '20px'}} onClick={handleDelete}></i>
               </div>
           </div>
           <div className="card-body">
             <p className="card-text">{props.text}</p>
          </div>
        </div>
    </div>
  )
}

export default List