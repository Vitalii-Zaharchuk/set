import React from 'react';
import s from './Names.module.css'
import { NavLink } from 'react-router-dom';
let Names = () =>{

    let nameData = [
        {id: 1, name: 'Igor'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Misha'},
        {id: 4, name: 'Roma'}
    ]
    let NameItem = (props) =>{
        return(
        <NavLink to={'/name/' + props.id}>{props.name}</NavLink>
        )
    }
    let nameElement = nameData.
    map(name =><NameItem name={name.name} id={name.id}/>)
    return(
        <div className={s.names}>
            {nameElement}
                

        </div>
    )
}
export default Names;