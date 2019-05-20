import React from 'react';
import s from './Profile.module.css';
import Avatar from "../Avatar/Avatar";
import Information from "../Information/Information";
import MyPosts from "../Posts/MyPosts/MyPosts";


const Profile = (props) => {
    return <section>
        <div className={s.wrapper}>
            <div className={s.narrow_content}>
                <Avatar />
            </div>
            <div className={s.wide_content}>
                <Information />
                <MyPosts posts={props.posts} />
            </div>
        </div>
    </section>
};

export default Profile;