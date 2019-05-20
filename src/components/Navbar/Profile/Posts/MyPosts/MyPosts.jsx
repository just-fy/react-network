import React from 'react';
import s from './MyPosts.module.css';
import Post from "../Post/Post";


const MyPosts = (props) => {

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="10">
                        Hello
                    </textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.posts.map( el => <Post post={el.post} name={el.name} date={el.date} />)}
            </div>
        </div>
    )
};

export default MyPosts;