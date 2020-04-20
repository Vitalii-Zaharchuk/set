import React from 'react';
import s from './Mypost.module.css'

let Mypost = (props) => {
    
    let PostItem = (props) =>{
        return(
        <div to={'/post/' + props.id}>{props.post}</div>
        )
    }
    let postElement = props.postData.
    map(post=><PostItem post={post.post} id={post.id}/>)
    return (   
        <div className={s.mypost}>
            <p>My post</p>
            <textarea></textarea>
            <button>Send</button>
            <div className={s.post}>
                {postElement}

            </div>

        </div>
    )
}
export default Mypost;