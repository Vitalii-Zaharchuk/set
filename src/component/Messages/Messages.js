import React from 'react';
import s from './Messages.module.css'
import Names from './Names/Names';
import Dialog from './Dialog/Dialog';
let Messages = (props) =>{
    
    return(
        <div className={s.messages}>
           <Names nameData={props.state.messagePage.nameData}/>
            <Dialog dialogData={props.state.messagePage.dialogData}/>

        </div>
    )
}
export default Messages;