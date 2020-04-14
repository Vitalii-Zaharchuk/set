import React from 'react';
import s from './Mypost.module.css'
let Mypost = () => {
    return (
        <div className={s.mypost}>
            <p>My post</p>
            <textarea></textarea>
            <button>Send</button>
            <div className={s.post}>
                <div>Good</div>
                <div>Fine</div>

            </div>

        </div>
    )
}
export default Mypost;