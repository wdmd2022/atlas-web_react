import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  body: {
    background: 'white',
    fontFamily: 'serif',
    fontSize: 'calc(12px + 1vmin)',
    textAlign: 'left',
    padding: '50px',
    paddingBottom: '200px'
  },
  labelOrButton: {
    margin: '20px'
  }
});

function Login() {
  return (
    <div className={css(styles.body)}>
      <p>
          Login to access the full dashboard
      </p>
      <label htmlFor="email" className={css(styles.labelOrButton)}>Email: </label>
      <input type="email" id="email" name="email" />
      <label htmlFor="password" className={css(styles.labelOrButton)}>Password: </label>
      <input type="password" id="password" name="password" />
      <button className={css(styles.labelOrButton)}>OK</button>
    </div>
  );
}

export default Login;
