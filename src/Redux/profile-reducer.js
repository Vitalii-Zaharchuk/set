const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const profileReducer = (state,action) =>{
        switch (action.type){
            case ADD_POST:
                    let newPost = {
                        id: 4,
                        post: state.newPostText,
                    };
                state.postData.push(newPost);
                state.newPostText = '';
                return state;
            case  UPDATE_NEW_POST_TEXT:
                state.newPostText = action.newPostText;
                return state;
            default:
                return state;
        }
                      

            
    
}
export let addPostActionCreator = () =>{
    return{
        type: 'ADD_POST'
    }
}
export let updateNewPostTextActionCreator = (text) =>{
    return{
        type: 'UPDATE-NEW-POST-TEXT',
        text:text
    }
}

export default profileReducer;