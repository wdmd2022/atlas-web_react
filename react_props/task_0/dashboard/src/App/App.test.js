// test file for App component using shallow rendering
import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('<App />', () => {
    it('renders without crashing', () => {
        // this will crash if I'm wrong
        shallow(<App />);
    });
});
