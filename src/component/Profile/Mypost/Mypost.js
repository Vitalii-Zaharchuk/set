import React from 'react';
import s from './Mypost.module.css'

let Mypost = () => {
    let postData = [
        {id: 1, post:'Good'},
        {id: 2, post:'Fine'},
        {id: 3, post:'Bad'}
    ]
    let PostItem = (props) =>{
        return(
        <div to={'/post/' + props.id}>{props.post}</div>
        )
    }
    let postElement = postData.
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