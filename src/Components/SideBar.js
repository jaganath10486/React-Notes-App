import React, {useContext} from 'react'
import AppContext from '../Context/AppContext'
import Styles from '../Styles/SideBar.module.css';
import AddList from './AddList';
import SideBarItem from './SideBarItem';

function SideBar() {
    const {lists} = useContext(AppContext);

  return (
    <div className={Styles.contentFill}>
      <div className={`${Styles.complete}`}>
         <h2 className="text-start">Notes List</h2>
         <div className={`${Styles.sideNavbar} d-flex flex-column`}>
            {
                lists.map(list => <SideBarItem key = {list.id} id = {list.id} title = {list.title}/>)
            }
         </div>
         <AddList/>
     </div>
    </div>
    
  )
}

export default SideBar