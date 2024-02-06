import { getFullYear, getFooterCopy } from '../utils/utils';
import React from 'react';
import AppContext from '../App/AppContext';

// we are using Context.Consumer instead of useContext because this is the
// learning objective.

function Footer({ className }) {
  return (
    <AppContext.Consumer>
      {({ user }) => {
        return (
          <footer className={className}>
            <p>
              Copyright {getFullYear()} - {getFooterCopy(true)}
            </p>
            {user.isLoggedIn && <p><a href='#'>Contact us</a></p>}
          </footer>
        );
      }}
    </AppContext.Consumer>
  );
}

export default Footer;
