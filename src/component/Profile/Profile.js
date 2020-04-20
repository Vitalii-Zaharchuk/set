import React from 'react';
import s from './Profile.module.css'
import Aboutme from './Aboutme/Aboutme';
import Mypost from './Mypost/Mypost';
let Profile = (props) =>{
    return(
        <div className={s.profile}>
            <div className={s.obloshka}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRiAyeDi1lJlueLjtzjlxZBEy82GX83ACwqmC4todJCznMMzlfr&usqp=CAU'/>
            </div>
            <Aboutme/>
            <Mypost postData={props.state.profilePage.postData}/>


        </div>
    )

}
export default Profile;