import React from 'react';
import logo from '../vk-logo-black-transparent.png';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <img className={s.logo} src={logo} alt="logo"/>
    </header>
};

export default Header;