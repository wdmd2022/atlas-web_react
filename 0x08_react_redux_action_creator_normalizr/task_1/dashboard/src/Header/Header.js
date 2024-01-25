import logo from '../assets/holberton-logo.jpeg';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

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
    },
    logout: {
        fontStyle: 'italic',
    },
    boldText: {
        fontWeight: 'bold',
    }
});

class Header extends React.Component {
    static contextType = AppContext;
    render() {
        const { user, logOut } = this.context;
        return (
            <>
            <header className={css(styles.header)}>
                <img src={logo} className={css(styles.logo)} alt="logo" />
                <h1>
                    School dashboard
                </h1>
            </header>
            {user.isLoggedIn && (
            <div id='logoutSection'>
                <p>Welcome <span className={css(styles.boldText)}>{user.email}</span> <a href="#" onClick={logOut} className={css(styles.logout)}>(logout)</a></p>
            </div>
            )}
            </>
        );
    }
}

export default Header;
