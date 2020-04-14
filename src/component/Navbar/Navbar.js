import React from 'react';
import s from './Navbar.module.css'
let Navbar =() =>{
    return(
        <div className={s.navbar}>
            <a href='#'>Profile</a>
            <a href='#'>Messages</a>
            <a href='#'>News</a>
            <a href='#'>Music</a>
            <a href='#'>Settings</a>
            
        </div>
    )
}
export default Navbar;