import logo from '../assets/holberton-logo.jpeg';
import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
                School dashboard
            </h1>
        </header>
    );
}

export default Header;
