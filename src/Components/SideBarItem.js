import React from 'react'
import '../Styles/ListItem.css';

function SideBarItem(props) {
  //console.log(props.id);
  return (
    <a className='item' onClick={() => {props.handleList(props.id)}}>
        <span>{props.title}</span>
    </a>
  )
}

export default SideBarItem