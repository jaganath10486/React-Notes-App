import React from 'react'
import '../Styles/ListItem.css';

function SideBarItem(props) {
  return (
    <a className='item'>
        <span>{props.title}</span>
    </a>
  )
}

export default SideBarItem