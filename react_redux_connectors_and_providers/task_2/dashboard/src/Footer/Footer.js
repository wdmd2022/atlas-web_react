import { getFullYear, getFooterCopy } from '../utils/utils';
import React from 'react';
import { connect } from 'react-redux';

function Footer({ className, user }) {
  return (
    <footer className={className}>
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user.get('isLoggedIn') && <p><a href='#'>Contact us</a></p>}
    </footer>
  );
}

const mapStateToProps = (state) => ({
  user: state.get('user'),
});

export default connect(mapStateToProps)(Footer);
