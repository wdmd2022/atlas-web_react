import React from 'react';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  app: {
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
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    const { logOut } = this.props;
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
      <>
        <Notifications listNotifications={listNotifications} />
        <div className={css(styles.app)}>
          <Header />
          {isLoggedIn?
          <BodySectionWithMarginBottom title="Course list" children={<CourseList listCourses={listCourses} />} />
          :
          <BodySectionWithMarginBottom title="Log in to continue" children={<Login />} />
          }
          <BodySection title="News from the School" children={<p>School is cool.</p>} />
          <Footer className={css(styles.footer)} />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
