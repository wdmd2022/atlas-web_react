import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import courseReducer from './courseReducer';
import { fromJS } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

describe('courseReducer', () => {
  const initialState = fromJS({ courses: {} });

  it('returns the default empty state when nothing is passed', () => {
    expect(courseReducer(undefined, {})).toEqual(initialState);
  });

  it('returns what we expect, i.e., the course data plus isSelected: false, when FETCH_COURSE_SUCCESS is passed', () => {
    const testAction = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 },
      ],
    };
    const normalizedData = coursesNormalizer(testAction.data);
    // and define our expected state we will test against
    const coursesWithSelection = Object.keys(normalizedData.entities.courses).reduce((acc, courseId) => {
      const course = normalizedData.entities.courses[courseId];
      acc[courseId] = { ...course, isSelected: false };
      return acc;
    }, {});
    const expectedState = initialState.merge({ courses: fromJS(coursesWithSelection) });
    expect(courseReducer(undefined, testAction).toJS()).toEqual(expectedState.toJS());
  });
  
  it('correctly updates isSelected to true for the correct index when SELECT_COURSE action is passed', () => {
    // first let's make a state object
    const testState = fromJS({
      courses: {
        1: { id: 1, name: "ES6", isSelected: false, credit: 60 },
        2: { id: 2, name: "Webpack", isSelected: false, credit: 20 },
        3: { id: 3, name: "React", isSelected: false, credit: 40 },
      }
    });
    // let's make an action object to pass in
    const testAction = { type: SELECT_COURSE, index: 2 };
    // and define our expected state we will test against
    const expectedState = testState.setIn(['courses', String(testAction.index), 'isSelected'], true);
    expect(courseReducer(testState, testAction).toJS()).toEqual(expectedState.toJS());
  });

  it('correctly updates isSelected to false for the correct index when UNSELECT_COURSE action is passed', () => {
    // first let's make a state object
    const testState = fromJS({
      courses: {
        1: { id: 1, name: "ES6", isSelected: true, credit: 60 },
        2: { id: 2, name: "Webpack", isSelected: true, credit: 20 },
        3: { id: 3, name: "React", isSelected: true, credit: 40 },
      }
    });
    // let's make an action object to pass in
    const testAction = { type: UNSELECT_COURSE, index: 2 };
    // and define our expected state we will test against
    const expectedState = testState.setIn(['courses', String(testAction.index), 'isSelected'], false);
    expect(courseReducer(testState, testAction).toJS()).toEqual(expectedState.toJS());
  });
});
