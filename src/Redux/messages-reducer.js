const ADD_DIALOG = 'ADD-DIALOG';
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT'
const messageReducer = (state,action) =>{
    switch (action.type){
        case ADD_DIALOG:
            let newDialog = {
                id: 5,
                dialog: state.newDialogText,
            };
            state.dialogData.push(newDialog);
            state.newDialogText = '';
            return state;
        case UPDATE_NEW_DIALOG_TEXT:
            state.newDialogText = action.newDialogText;
            return state
        default:
            return state;  
    }
}
export let addDialogActionCreator = () =>{
    return{
        type: 'ADD-DIALOG'
    }
}
export let updateNewDialogTextActionCreator = (text) =>{
    return{
        type: 'UPDATE-NEW-DIALOG-TEXT',
        text:text
    }
}
export default messageReducer;