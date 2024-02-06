import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;
const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.window = window;
global.document = window.document;

describe('WithLogging Higher Order Component', () => {
    it('calls console.log correctly on mount and unmount with Component when the wrapped element is pure HTML', () => {
        // mock the console.log? Surely you jest
        console.log = jest.fn();
        // now we create a variable with the HOC wrapping a function rendering html
        const WrappedComponent = WithLogging(() => <p />);
        // wrap it up!
        const wrapper = mount(<WrappedComponent />);
        // and start pouring over those logs
        expect(console.log).toHaveBeenCalledWith('Component Component is mounted');
        // See what we wanted to? Let's unmount and check again
        wrapper.unmount();
        expect(console.log).toHaveBeenCalledWith('Component Component is going to unmount');
        // now let's tidy up like we were never here
        console.log.mockRestore();
    });

    it('calls console.log correctly on mount and unmount with the name of the component when the wrapped element is the Login component', () => {
        // first let's make our fake console.log
        console.log = jest.fn();
        // and before we make our wrapper, let's make a Wrapped component
        const WrappedComponent = WithLogging(Login);
        // okay finally we get to do the other type of wrapping
        const wrapper = mount(<WrappedComponent />);
        // we'll check to make sure it logged properly, like a tree felling machine
        expect(console.log).toHaveBeenCalledWith('Component Login is mounted');
        // and with that done, unmount the thing
        wrapper.unmount();
        // incapable of being cool about it, we'll look back while walking away
        expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');
        // but with our hopes confirmed, we will pretend like we never did
        console.log.mockRestore();
    });
});
