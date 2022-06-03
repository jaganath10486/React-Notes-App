import React, { useContext } from 'react'
import AppContext from '../Context/AppContext';
import '../Styles/ListItem.css';

function SideBarItem(props) {
  //console.log(props.id);
  const {setId} = useContext(AppContext);
  const handleClick = () => {
    setId(props.id);
    console.log('Clicked');
    console.log(props.id)
  }

  return (
    <a className='item' onClick={handleClick}>
        <span>{props.title}</span>
    </a>
  )
}

export default SideBarItem