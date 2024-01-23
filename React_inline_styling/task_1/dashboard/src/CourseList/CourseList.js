import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import './CourseList.css';

const styles = StyleSheet.create({
  courseList: {
    width: '80%',
    marginTop: '100px',
    borderCollapse: 'collapse',
    marginLeft: '10%',
    marginRight: '10%',
    borderLeft: '1px solid gray',
    borderRight: '1px solid gray',
    borderBottom: '1px solid gray',
  },
  firstHeaderRow: {
    textAlign: 'center',
    borderTop: '1px solid gray',
    borderBottom: '1px solid gray',
  },
  secondHeaderRow: {
    textAlign: 'left',
    paddingLeft: '2%',
    borderBottom: '1px solid gray',
  },
  tbodyRow: {
    textAlign: 'left',
    paddingLeft: '2%',
  }
});

function CourseList({ listCourses }) {
  return (
    <table className={css(styles.courseList)}>
      <thead>
        <CourseListRow textFirstCell='Available courses' isHeader={true} className={css(styles.firstHeaderRow)} />
        <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true} className={css(styles.secondHeaderRow)} />
      </thead>
      <tbody className={css(styles.tbody)}>
        {listCourses.length === 0 ? (<CourseListRow textFirstCell="No course available yet" isHeader={false} className={css(styles.tbodyRow)} />) : (
          listCourses.map(course => (<CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={String(course.credit)} isHeader={false} className={css(styles.tbodyRow)} />))
        )}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
