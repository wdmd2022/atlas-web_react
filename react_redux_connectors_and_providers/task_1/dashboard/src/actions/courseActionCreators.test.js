import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('courseActionCreators', () => {
  it(', or, should I say, they, (as it is plural) return the right action using selectCourse action creator', () => {
    expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  it(', or, should I say, they, (as it is plural) return the right action using selectCourse action creator', () => {
    expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});
