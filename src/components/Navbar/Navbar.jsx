import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={s.navigation}>
        <ul>
            <li className={s.navItem}><NavLink className={s.navLink} nativeClassName={s.linkAktiv} to="/profile">Profile</NavLink></li>
            <li className={s.navItem}><NavLink className={s.navLink} to="/messages">Messages</NavLink></li>
            <li className={s.navItem}><NavLink className={s.navLink} to="/news">News</NavLink></li>
            <li className={s.navItem}><NavLink className={s.navLink} to="/photos">Photos</NavLink></li>
        </ul>
    </nav>
};

export default Navbar;