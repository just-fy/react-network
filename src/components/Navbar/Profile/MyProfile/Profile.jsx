import React from 'react';
import s from './Profile.module.css';
import Post from "../Posts/Post/Post";
import Avatar from "../Avatar/Avatar";
import Information from "../Information/Information";

const postData = [
    {name: 'Elena Voronina', id: 1, post: 'Hello', date:'4 Dec 2018'},
    {name: 'Nastya Faizulina', id: 2, post: 'Hi', date:'23 Sep 2015'},
    {name: 'Olesya Purova', id: 3, post: 'Bye', date:'7 Dec 2015'},
    {name: 'Katya Popova', id: 4, post: 'I am fine', date:'3 Dec 2011'},
];

const Profile = () => {
    return <section>
        <div className={s.wrapper}>
            <div className={s.narrow_content}>
                <Avatar />
            </div>
            <div className={s.wide_content}>
                <Information />
                {postData.map(postInfo => <Post name={postInfo.name} post={postInfo.post} date={postInfo.date} />)}
            </div>
        </div>
    </section>
};

export default Profile;