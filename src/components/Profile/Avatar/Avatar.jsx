import React from 'react';
import s from './Avatar.module.css';

const Avatar = () => {
    return (
        <div className={s.avatar}>
            <img
                src="https://m.media-amazon.com/images/M/MV5BMDQ3ZDEyZmUtYjkyNC00YzI1LTgzYmUtNmQzZmY3ZjYzNjMyXkEyXkFqcGdeQXVyMTkxMTU0MTE@._V1_UY317_CR20,0,214,317_AL_.jpg"
                alt="avatar"/>
        </div>
    )
};

export default  Avatar;