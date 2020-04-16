import React from 'react';
import s from './Messages.module.css'
import Names from './Names/Names';
import Dialog from './Dialog/Dialog';
let Messages = () =>{
    return(
        <div className={s.messages}>
           <Names/>
            <Dialog/>

        </div>
    )
}
export default Messages;