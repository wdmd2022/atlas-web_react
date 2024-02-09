import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';
import { fromJS } from 'immutable';

const initialState = fromJS({ courses: {} });

// now let's write the reducer.
// When the action creator sends the action FETCH_COURSE_SUCCESS, it also sends
// the list of courses in a data attribute. The action would look like:
// {
//     type: FETCH_COURSE_SUCCESS,
//     data: [
//       {
//         id: 1,
//         name: "ES6",
//         credit: 60
//       },
//       {
//         id: 2,
//         name: "Webpack",
//         credit: 20
//       },
//       {
//         id: 3,
//         name: "React",
//         credit: 40
//       }
//     ]
//   }
// when updating the state of the reducer, we want to set the attribute
// 'isSelected' to false for every item in the list.  The expected data from
// the reducer, then, would be:
// [
//   {
//     id: 1,
//     name: "ES6",
//     isSelected: false,
//     credit: 60
//   },
//   {
//     id: 2,
//     name: "Webpack",
//     isSelected: false,
//     credit: 20
//   },
//   {
//     id: 3,
//     name: "React",What?
//     isSelected: false,
//     credit: 40
//   }
// ]
// When the action creator sends the actions SELECT_COURSE or UNSELECT_COURSE,
// it also sends an index corresponding to the id of the course to update.
const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedData = coursesNormalizer(action.data);
      const coursesWithSelection = Object.keys(normalizedData.entities.courses).reduce((acc, courseId) => {
        const course = normalizedData.entities.courses[courseId];
        acc[courseId] = { ...course, isSelected: false };
        return acc;
      }, {});
      return state.merge({ courses: fromJS(coursesWithSelection) });
    case SELECT_COURSE:
      return state.setIn(['courses', String(action.index), 'isSelected'], true);
    case UNSELECT_COURSE:
      return state.setIn(['courses', String(action.index), 'isSelected'], false);
    default:
      return state;
  }
}

export default courseReducer;
