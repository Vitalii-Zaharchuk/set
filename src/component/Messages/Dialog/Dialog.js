import React from 'react';
import s from './Dialog.module.css'
let Dialog = () =>{
    let dialogData = [
        {id: 1, dialog: 'Hello'},
        {id: 2, dialog: 'Bad'},
        {id: 3, dialog: 'Good'},
        {id: 4, dialog: 'Nice'}
    ]
    let DialogItem = (props) =>{
        return(
        <div to={'/dialog/' + props.id}>{props.dialog}</div>
        )
    }
    let dialogElement = dialogData.
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