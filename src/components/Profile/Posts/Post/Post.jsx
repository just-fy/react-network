import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.postPhoto}><img src="https://m.media-amazon.com/images/M/MV5BMDQ3ZDEyZmUtYjkyNC00YzI1LTgzYmUtNmQzZmY3ZjYzNjMyXkEyXkFqcGdeQXVyMTkxMTU0MTE@._V1_UY317_CR20,0,214,317_AL_.jpg" alt=""/></div>
            <div>
                <span>{props.name}</span>
                <time className={s.time}>4 Dec 2018</time>
            </div>
            <article className={s.postText}>
                <p>{props.text}</p>
            </article>
        </div>
    )
};

export  default Post;