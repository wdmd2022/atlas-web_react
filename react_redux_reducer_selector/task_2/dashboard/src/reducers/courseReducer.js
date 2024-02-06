import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';

// set default state to be an empty array
const initialState = [];

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
//     name: "React",
//     isSelected: false,
//     credit: 40
//   }
// ]
// When the action creator sends the actions SELECT_COURSE or UNSELECT_COURSE,
// it also sends an index corresponding to the id of the course to update.
const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map(course => ({ ...course, isSelected: false }));
    case SELECT_COURSE:
      return state.map(course => course.id === action.index ? { ...course, isSelected: true } : course);
    case UNSELECT_COURSE:
      return state.map(course => course.id === action.index ? { ...course, isSelected: false } : course);
    default:
      return state;
  }
}

export default courseReducer;
