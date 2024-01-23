import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from "aphrodite";

// can't have Aphrodite messing up our tests with style injection
beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

// but when we're done we'll want to clear up that suppression
afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('<BodySectionWithMarginBottom />', () => {
  it('renders the BodySection component and passes props correctly to the child', () => {
    // Wrap it up with some style -- maybe put a bow on it?
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    // Let's peek into the wrapper and find that BodySection
    const bodySection = wrapper.find(BodySection);
    // Does it exist? Fingers crossed.
    expect(bodySection.exists()).toBe(true);
    // Props check - was the title passed in or lost in translation?
    expect(bodySection.props().title).toBe('test title');
    // And of course, no public discourse is complete without thinking of the children
    expect(bodySection.props().children).toEqual(<p>test children node</p>);
  });
});
