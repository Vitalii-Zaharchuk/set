import React from 'react';
import s from './Dialog.module.css'
let Dialog = (props) =>{
    
    let DialogItem = (props) =>{
        return(
        <div to={'/dialog/' + props.id}>{props.dialog}</div>
        )
    }
    let dialogElement = props.dialogData.
    map(dialog =><DialogItem dialog={dialog.dialog} id={dialog.id}/>)
    return(
        <div className={s.dialog}>
               {dialogElement}
            <textarea></textarea>
            <button>Send</button>
                

         </div>
    )
}
export default Dialog;