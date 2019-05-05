import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return <nav className='page-nav'>
        <ul className={}>
            <li className={classes.navItem}><a className={classes.navLink} href="">Profile</a></li>
            <li className={classes.navItem}><a className={classes.navLink} href="">Messages</a></li>
            <li className={classes.navItem}><a className={classes.navLink} href="">News</a></li>
            <li className={classes.navItem}><a className={classes.navLink} href="">Photos</a></li>
        </ul>
    </nav>
};

export default Navbar;