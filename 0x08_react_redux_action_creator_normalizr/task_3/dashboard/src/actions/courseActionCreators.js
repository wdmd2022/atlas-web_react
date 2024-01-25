import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

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
