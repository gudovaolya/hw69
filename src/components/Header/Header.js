import React from 'react';
import './Header.css';
import Logo from './Logo/Logo';

const Header = () => (
    <header>
        <div className="container clearfix">
            <Logo />
        </div>
    </header>
);

export default Header;