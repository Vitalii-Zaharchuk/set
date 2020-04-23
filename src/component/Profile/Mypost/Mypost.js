import React from 'react';
import s from './Mypost.module.css'

let Mypost = (props) => {
    let addPostActionCreator = () =>{
        return{
            type:'ADD-POST'
        }
    }
    let updateNewPostTextActionCreator = (text) =>{
        return{
            type:'UPDATE-NEW-POST-TEXT',newText:text
        }
    }
    let onPostChange = () =>{
        let action = updateNewPostTextActionCreator(text)
        let text = newPostElement.current.value;
        props.dispatch(action);
    }
    let addPost = () =>{
        
        props.dispatch(addPostActionCreator());
    }
    let newPostElement = React.createRef();
    
    let PostItem = (props) =>{
        return(
        <div to={'/post/' + props.id}>{props.post}</div>
        )
    }
    let postElement = props.profilePage.postData.
    map(post=><PostItem post={post.post} id={post.id}/>)
    return (   
        <div className={s.mypost}>
            <p>My post</p>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.profilePage.newPostText}></textarea>
            <button onClick={addPost}>Send</button>
            <div className={s.post}>
                {postElement}

            </div>

        </div>
    )
}
export default Mypost;