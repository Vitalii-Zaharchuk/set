import {rerenderEntireTree} from '../render';
let state = {
    profilePage:{
        postData: [
            {id: 1, post:'Good'},
            {id: 2, post:'Fine'},
            {id: 3, post:'Bad'}
        ],
        newPost: '123'
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
        ]
    },
}
export let addPost = (postMessage) =>{
    let newPost ={
        id:4,
        post:newPost,
    }
    state.profilePage.postData.push(newPost)
    rerenderEntireTree(state);
};
export default state;