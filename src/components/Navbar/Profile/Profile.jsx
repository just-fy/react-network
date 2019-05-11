import React from 'react';
import s from './Profile.module.css';
import Post from "./Posts/Post/Post";
import Avatar from "./Avatar/Avatar";

const Profile = () => {
    return <section>
        <div className={s.wrapper}>
            <Avatar />
            <Post name='Elena Voronina' text='Hello' date='4 Dec 2018'/>
            <Post name='Nastya Faizulina' text='Hello, what are you doing?'/>
            <Post name='Olesya Purova' text='Hi, it is my first post!'/>
            <Post name='Katya Popova' text='Wait me, please...'/>
        </div>
    </section>
};

export default Profile;