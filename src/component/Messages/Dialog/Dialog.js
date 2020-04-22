import React from 'react';
import s from './Dialog.module.css'
let Dialog = (props) =>{
    let onDialogChange= () =>{
        let text = newDialogElement.current.value;
        props.dispatch({type:'UPDATE-NEW-DIALOG-TEXT',text:text});
    }
    let addDialog = () =>{
       
        props.dispatch({type:'ADD-DIALOG'});
    }
    let newDialogElement = React.createRef();

    
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
            <textarea ref={newDialogElement} onChange={onDialogChange} value={props.newDialogText}></textarea>
            <button onClick={addDialog}>Send</button>
                

         </div>
    )
}
export default Dialog;