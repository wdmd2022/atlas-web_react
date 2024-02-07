import React from 'react';
import BodySection from './BodySection';
import { shallow } from 'enzyme';

describe('<BodySection />', () => {
    it('correctly renders the children and one h2 element', () => {
      // first let's get a-wrappin'
      const wrapper = shallow(
        <BodySection title="test title">
          <p>test children node</p>
        </BodySection>
      );
      // now let's see if we managed our expectations properly
      // to have one h2
      expect(wrapper.find('h2').length).toBe(1);
      // with the right words
      expect(wrapper.find('h2').text()).toBe('test title');
      // and one p
      expect(wrapper.find('p').length).toBe(1);
      // with the right words!
      expect(wrapper.find('p').text()).toBe('test children node');
    });
  });
