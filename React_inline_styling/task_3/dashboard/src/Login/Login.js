import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  body: {
    background: 'white',
    fontFamily: 'serif',
    fontSize: 'calc(12px + 1vmin)',
    textAlign: 'left',
    padding: '50px',
    paddingBottom: '50px'
  },
  formContainer: {
    '@media (min-width: 900px)': {
      display: 'flex',
      alignItems: 'center'
    }
  },
  formGroup: {
    display: 'flex',
    marginBottom: '20px',
    alignItems: 'center',
    marginRight: '50px',
    '@media (max-width: 900px)' : {
      alignItems: 'flex-start',
      width: '100%',
      marginBottom: '5px'
      // flexDirection: 'column'
    }
  },
  label: {
    marginRight: '10px',
    marginBottom: '5px',
    '@media (max-width: 900px)': {
      marginBottom: '0px'
    }
  },
  input: {
    marginRight: '20px',
    flexGrow: 1,
    '@media (max-width: 899px)': {
      border: 'none',
    }
  },
  button: {
    margin: '2px',
    '@media (max-width: 899px)': {
      border: 'none',
      backgroundColor: 'white',
      boxShadow: '0 0 12px 3px #DAA520',
      borderRadius: '2px',
      paddingLeft: '10px',
      paddingRight: '10px',
      paddingTop: '5px',
      paddingBottom: '5px',
    },
    '@media (min-width: 900px)': {
      flexGrow: 0,
      marginLeft: '10px',
      marginBottom: '10px',
    }
  }
});

function Login() {
  return (
    <div className={css(styles.body)}>
      <p>
          Login to access the full dashboard
      </p>
      <div className={css(styles.formContainer)}>
        <div className={css(styles.formGroup)}>
          <label htmlFor="email" className={css(styles.label)}>Email: </label>
          <input type="email" id="email" name="email" className={css(styles.input)} />
        </div>
        <div className={css(styles.formGroup)}>
          <label htmlFor="password" className={css(styles.label)}>Password: </label>
          <input type="password" id="password" name="password" className={css(styles.input)} />
        </div>
      <button className={css(styles.button)}>OK</button>
      </div>
    </div>
  );
}

export default Login;
