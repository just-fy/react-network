import React from 'react';
import s from './Messages.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = `/messages/${props.id}`;
    return (
        <div className={s.dialog}>
            <NavLink to={path} className={s.link}>{props.name}</NavLink>
        </div>
    )
};
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
};
const Messages = (props) => {
    return (
        <div className={s.page_wrap}>
            <div className={s.dialogs_wrap}>
                {props.dialogUsers.map(dialogUser => <DialogItem name={dialogUser.name} id={dialogUser.id} />)}
            </div>
            <div className={s.messages_wrap}>
                {props.messages.map(mes => <Message message={mes.message} />)}
            </div>
        </div>
    )
};

export default Messages;