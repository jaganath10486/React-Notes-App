import React, { useContext } from 'react'
import AppContext from '../Context/AppContext';
import '../Styles/ListItem.css';

function SideBarItem(props) {
  //console.log(props.id);
  const {setId, dispatch2} = useContext(AppContext);

  const deleteList = () => {
    dispatch2({
      type : 'DELETE',
      value : props.id
    })
    
  }

  const handleClick = () => {
    setId(props.id);
    //console.log('Clicked');
    //console.log(props.id)
  }

  return (
    <div className='item d-flex justify-content-between  align-items-baseline text-center' onClick={handleClick}>
       <span>{props.title}</span>
        <i class="fa fa-trash" style={{fontSize : '25px'}} onClick={deleteList}></i>
    </div>
  )
}

export default SideBarItem