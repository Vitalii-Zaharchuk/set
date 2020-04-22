let store = {
    rerenderEntireTree  ()  {
        console.log('sd')
    },
    subscribe  (observer)  {
        this._rerenderEntireTree = observer;
    },
    _state: {
        profilePage: {
            postData: [
                { id: 1, post: 'Good' },
                { id: 2, post: 'Fine' },
                { id: 3, post: 'Bad' }
            ],
            newPostText: '123'
        },
        messagePage: {
            nameData: [
                { id: 1, name: 'Igor' },
                { id: 2, name: 'Dima' },
                { id: 3, name: 'Misha' },
                { id: 4, name: 'Roma' }
            ],
            dialogData: [
                { id: 1, dialog: 'Hello' },
                { id: 2, dialog: 'Bad' },
                { id: 3, dialog: 'Good' },
                { id: 4, dialog: 'Nice' }
            ],
            newDialogText: 'Fan'
        },
    },
    getState(){
        return this._state;

    },
    
    addDialog  ()  {
        let newDialog = {
            id: 5,
            dialog: this._state.messagePage.newDialogText,
        }
        this._state.messagePage.dialogData.push(newDialog);
        this._rerenderEntireTree(this._state);
    },
    updateNewDialogText  (newDialogText)  {
        this._state.messagePage.newDialogText = newDialogText;
        this._rerenderEntireTree(this._state);
    },
    dispatch (action) {
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 4,
                post: this._state.profilePage.newPostText,
            }
            this._state.profilePage.postData.push(newPost)
            this._rerenderEntireTree(this._state);
        }else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newPostText;
            this._rerenderEntireTree(this._state);
        }
    }
}

export default store;