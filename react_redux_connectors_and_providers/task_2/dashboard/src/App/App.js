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
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest } from '../actions/uiActionCreators';

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
      user: {
        email: '',
        password: '',
      },
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
      ],
    };
  }

  markNotificationAsRead = (id) => {
    // using an arrow function because I am tired of binding things
    this.setState(prevState => ({
      listNotifications: prevState.listNotifications.filter(notification => notification.id !== id)
    }));
  };

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

  render() {
    const { listNotifications } = this.state;
    const { displayDrawer, isLoggedIn, login, displayNotificationDrawer, hideNotificationDrawer } = this.props;
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    return (
      <>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={displayNotificationDrawer}
          handleHideDrawer={hideNotificationDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className={css(styles.body)}>
          <Header />
          {isLoggedIn?
          <BodySectionWithMarginBottom title="Course list" children={<CourseList listCourses={listCourses} />} />
          :
          <BodySectionWithMarginBottom title="Log in to continue" children={<Login logIn={login} />} />
          }
          <BodySection title="News from the School" children={<p>School is cool. School is cool.</p>} />
          <Footer className={css(styles.footer)} />
        </div>
      </>
    );
  }
}

App.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

App.defaultProps = {
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  login: () => {},
};

// now we start to connect our Redux state, which is an Immutable Map.
export const mapStateToProps = (state) => ({
  isLoggedIn: state.get('isUserLoggedIn'),
  displayDrawer: state.get('isNotificationDrawerVisible'),
});

// and we can connect our action creators to the props
const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest,
}

// export default App; // got rid of this old export in favor of:
// using redux's connect, which will tell our app to re-render when
// the state store changes
export default connect(mapStateToProps, mapDispatchToProps)(App);
