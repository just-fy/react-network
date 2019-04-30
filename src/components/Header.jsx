import React from 'react';
import logo from './vk-logo-black-transparent.png';

const Header = () => {
    return <header className='page-header'>
        <img className='page-header__logo' src={logo} alt="logo"/>
    </header>
};

export default Header;