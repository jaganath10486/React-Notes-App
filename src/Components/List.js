import React from 'react'

function List(props) 
{
  return (
    <div className='col-sm-4'>
        <div className="card text-bg-primary mb-3">
           <div className="card-header d-flex justify-content-between">
               <span className='fs-6'>{props.date}</span>
               <span className='fs-1' style={{paddingRight : '40px'}}>{props.title}</span>
               <div className='icons'>
               <i class="fa fa-pencil-square-o" aria-hidden="true" style={{fontSize : '20px'}}></i>
               <i class="fa fa-trash" aria-hidden="true" style={{fontSize : '20px'}}></i>
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