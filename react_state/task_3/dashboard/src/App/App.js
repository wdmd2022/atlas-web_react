import React from 'react';
import { useState } from 'react';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';
import AppContext from './AppContext';

const styles = StyleSheet.create({
  body: {
    textAlign: 'center',
    backgroundColor: 'white',
    fontFamily: 'serif',
    paddingTop: '0px'
  },
  footer: {
    fontStyle: 'italic',
    fontSize: 'calc(10px + 1vmin)',
    textAlign: 'center',
    backgroundColor: 'white',
    fontFamily: 'serif',
    borderTop: '2px solid red',
    marginTop: '200px'
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      },
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logOut = this.logOut.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  logIn(email, password) {
    this.setState({ user: { email, password, isLoggedIn: true}});
  }

  logOut() {
    this.setState({ user: { email: '', password: '', isLoggedIn: false }});
  }

  componentDidMount() {
    document.addEventListener('keydown', this.pressyWessyCtrlH);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.pressyWessyCtrlH);
  }
  pressyWessyCtrlH = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert("logging you out");
      this.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }
  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  render() {
    const { user, displayDrawer } = this.state;
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
    ];

    return (
      <AppContext.Provider value={{ user: this.state.user, logOut: this.logOut }}>
      <>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className={css(styles.body)}>
          <Header />
          {user.isLoggedIn?
          <BodySectionWithMarginBottom title="Course list" children={<CourseList listCourses={listCourses} />} />
          :
          <BodySectionWithMarginBottom title="Log in to continue" children={<Login logIn={this.logIn} />} />
          }
          <BodySection title="News from the School" children={<p>School is cool. School is cool.</p>} />
          <Footer className={css(styles.footer)} />
        </div>
      </>
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
};

App.defaultProps = {
};

export default App;
