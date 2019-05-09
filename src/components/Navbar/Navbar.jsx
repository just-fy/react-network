import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return <nav className={s.navigation}>
        <ul>
            <li className={s.navItem}><a className={s.navLink} href="/profile">Profile</a></li>
            <li className={s.navItem}><a className={s.navLink} href="/messages">Messages</a></li>
            <li className={s.navItem}><a className={s.navLink} href="#">News</a></li>
            <li className={s.navItem}><a className={s.navLink} href="#">Photos</a></li>
        </ul>
    </nav>
};

export default Navbar;