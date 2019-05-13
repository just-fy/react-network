import React from 'react';
import s from './Messages.module.css';
import {NavLink} from "react-router-dom";

const dialogData = [
    {name: 'Katya Smirnova', id: 1},
    {name: 'Nastya Faizulina', id: 2},
    {name: 'Olya Ivanova', id: 3},
    {name: 'Vika Retyr', id: 4},
    {name: 'Sanya Lo', id: 5}
];
const messages = [
    {message: 'Hello'},
    {message: 'Hi, how are u?'},
    {message: 'I\'m fine'},
    {message: 'Thank you'},
    {message: 'I go home'},
];

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
const Messages = () => {
    return (
        <div className={s.page_wrap}>
            <div className={s.dialogs_wrap}>
                {dialogData.map(dialogItem => <DialogItem name={dialogItem.name} id={dialogItem.id} />)}
            </div>
            <div className={s.messages_wrap}>
                {messages.map(mes => <Message message={mes.message} />)}
            </div>
        </div>
    )
};

export default Messages;