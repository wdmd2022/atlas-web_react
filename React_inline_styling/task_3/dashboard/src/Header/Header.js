import logo from '../assets/holberton-logo.jpeg';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    logo: { height: '20vmin' },
    header: {
        fontFamily: 'serif',
        backgroundColor: 'white',
        minHeight: '10vh',
        height: '20vmin',
        width: '100%',
        right: '5px',
        display: 'flex',
        fontSize: 'calc(8px + 1vmin)',
        color: '#E0354B',
        alignItems: 'center',
        marginTop: '50px',
        borderBottom: '3px solid red'
    }
});

function Header() {
    return (
        <header className={css(styles.header)}>
            <img src={logo} className={css(styles.logo)} alt="logo" />
            <h1>
                School dashboard
            </h1>
        </header>
    );
}

export default Header;
