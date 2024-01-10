// test file for App component using shallow rendering
import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('<App />', () => {
    it('renders without crashing', () => {
        // this will crash if I'm wrong
        shallow(<App />);
    });

    it('renders a div with the class App-header', () => {
        // first make a new wrapper
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-header').exists()).toBe(true);
    });

    it('renders a div with the class App-body', () => {
        // make another new wrapper
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-body').exists()).toBe(true);
    });

    it('renders a div with the class App-footer', () => {
        // it must be Christmas, because I can't stop wrapping
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-footer').exists()).toBe(true);
    });
});
