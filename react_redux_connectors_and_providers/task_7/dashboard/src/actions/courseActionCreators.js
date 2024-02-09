import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { bindActionCreators } from 'redux';

// The function selectCourse will accept index as argument
export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index,
  };
}

// The function unSelectCourse will accept index as argument
export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index,
  };
}

// let's put them together so we can bind them
export const courseActions = {
  selectCourse,
  unSelectCourse,
};

// now let's bind them
export const boundCourseActionCreators = (dispatch) => bindActionCreators(courseActions, dispatch);
