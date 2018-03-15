import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import './Logo.css';

const Logo = () => (
    <NavLink to="/" exact className="logo">
        <img src={logo} alt="BisLite"/>
    </NavLink>
);

export default Logo;