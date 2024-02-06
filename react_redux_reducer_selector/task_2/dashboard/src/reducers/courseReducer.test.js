import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import courseReducer from './courseReducer';

describe('courseReducer', () => {
  it('returns the default empty array when nothing is passed', () => {
    expect(courseReducer(undefined, {})).toEqual([]);
  });

  it('returns what we expect, i.e., the course data plus isSelected: false, when FETCH_COURSE_SUCCESS is passed', () => {
    // let's make an action object to pass in
    const testAction = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 },
      ],
    };
    // and define our expected state we will test against
    const expectedState = testAction.data.map(course => ({ ...course, isSelected: false }));
    expect(courseReducer(undefined, testAction)).toEqual(expectedState);
  });

  it('correctly updates isSelected to true for the correct index when SELECT_COURSE action is passed', () => {
    // first let's make a state object
    const testState = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 },
    ];
    // let's make an action object to pass in
    const testAction = { type: SELECT_COURSE, index: 2 };
    // and define our expected state we will test against
    const expectedState = testState.map(course => course.id === testAction.index
      ? { ...course, isSelected: true }
      : course
    );
    expect(courseReducer(testState, testAction)).toEqual(expectedState);
  });

  it('correctly updates isSelected to false for the correct index when UNSELECT_COURSE action is passed', () => {
    // first let's make a state object
    const testState = [
      { id: 1, name: "ES6", isSelected: true, credit: 60 },
      { id: 2, name: "Webpack", isSelected: true, credit: 20 },
      { id: 3, name: "React", isSelected: true, credit: 40 },
    ];
    // let's make an action object to pass in
    const testAction = { type: UNSELECT_COURSE, index: 2 };
    // and define our expected state we will test against
    const expectedState = testState.map(course => course.id === testAction.index
      ? { ...course, isSelected: false }
      : course
    );
    expect(courseReducer(testState, testAction)).toEqual(expectedState);
  });
});
