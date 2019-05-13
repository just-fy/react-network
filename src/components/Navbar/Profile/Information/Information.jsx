import React from 'react';
import s from './Information.module.css'

const Information = () => {
    return (
        <div className={s.page_info_wrap}>
            <h2>Anastasia Fayzulina</h2>
            <div className={s.info_row}>
                <div className={s.label}>Birthday:</div>
                <div className={s.labeled}>December 2</div>
            </div>

            <div className={s.info_row}>
                <div className={s.label}>Relationship:</div>
                <div className={s.labeled}>Married</div>
            </div>

            <div className={s.info_row}>
                <div className={s.label}>Hometown:</div>
                <div className={s.labeled}>Moscow</div>
            </div>
        </div>
    )
};

export default Information;