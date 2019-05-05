import React from 'react';
import logo from './vk-logo-black-transparent.png';
import classes from './Header.module.css';

const Header = () => {
    return <header className={classes.header}>
        <img className={classes.logo} src={logo} alt="logo"/>
    </header>
};

export default Header;