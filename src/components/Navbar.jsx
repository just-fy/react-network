import React from 'react';

const Navbar = () => {
    return <nav className='page-nav'>
        <ul className='page-nav__inner'>
            <li className='page-nav__item'><a className='page-nav__link' href="">Profile</a></li>
            <li className='page-nav__item'><a className='page-nav__link' href="">Messages</a></li>
            <li className='page-nav__item'><a className='page-nav__link' href="">News</a></li>
            <li className='page-nav__item'><a className='page-nav__link' href="">Photos</a></li>
        </ul>
    </nav>
};

export default Navbar;