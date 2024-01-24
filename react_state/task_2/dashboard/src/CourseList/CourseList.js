import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

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
  }
});

function CourseList({ listCourses }) {
  return (
    <table className={css(styles.courseList)}>
      <thead>
        <CourseListRow textFirstCell='Available courses' isHeader={true} />
        <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true} />
      </thead>
      <tbody>
        {listCourses.length === 0 ? (<CourseListRow textFirstCell="No course available yet" isHeader={false} />) : (
          listCourses.map(course => (<CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={String(course.credit)} isHeader={false} />))
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
