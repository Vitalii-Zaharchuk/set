
let rerenderEntireTree = () =>{
    console.log('sd')
}
export let subscribe = (observer) =>{
    rerenderEntireTree = observer;
}
let state = {
    profilePage:{
        postData: [
            {id: 1, post:'Good'},
            {id: 2, post:'Fine'},
            {id: 3, post:'Bad'}
        ],
        newPostText: '123'
    },
    messagePage:{
        nameData: [
            {id: 1, name: 'Igor'},
            {id: 2, name: 'Dima'},
            {id: 3, name: 'Misha'},
            {id: 4, name: 'Roma'}
        ],
        dialogData: [
            {id: 1, dialog: 'Hello'},
            {id: 2, dialog: 'Bad'},
            {id: 3, dialog: 'Good'},
            {id: 4, dialog: 'Nice'}
        ],
        newDialogText: 'Fan'
    },
}
export let addPost = () =>{
    let newPost ={
        id:4,
        post:state.profilePage.newPostText,
    }
    state.profilePage.postData.push(newPost)
    rerenderEntireTree(state);
};
export let updateNewPostText = (newPostText) =>{
    state.profilePage.newPostText = newPostText;
    rerenderEntireTree(state);
}
export let addDialog = () =>{
    let newDialog ={
        id: 5,
        dialog: state.messagePage.newDialogText,
    }
    state.messagePage.dialogData.push(newDialog);
    rerenderEntireTree(state);
};
export let updateNewDialogText = (newDialogText) =>{
    state.messagePage.newDialogText = newDialogText;
    rerenderEntireTree(state);
}
export default state;