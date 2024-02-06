import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import AppContext from '../App/AppContext';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;
const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.window = window;
global.document = window.document;

describe('<Footer />', () => {
    // first let's indulge in some mockery
    const mockContextLoggedOut = {
        user: {
            isLoggedIn: false,
        }
    };
    const mockContextLoggedIn = {
        user: {
            isLoggedIn: true,
        }
    };

    it('renders without crashing hopefully', () => {
        // this will crash it if I'm wrong!
        mount(
            <AppContext.Provider value={mockContextLoggedOut}>
                <Footer />);
            </AppContext.Provider>
        );
    });

    it('at least renders the text Copyright', () => {
        // first we'll mount a new Footer instance for testing
        const wrapper = mount(
            <AppContext.Provider value={mockContextLoggedOut}>
                <Footer />);
            </AppContext.Provider>
        );
        expect(wrapper.find(Footer).text()).toContain('Copyright');
    });

    it('hides the "Contact us" link from strangers', () => {
        // first we'll mount a new Footer instance for testing
        const wrapper = mount(
            <AppContext.Provider value={mockContextLoggedOut}>
                <Footer />
            </AppContext.Provider>
        );
        // now let's look for that link (hope we don't see it!)
        expect(wrapper.find('a[href="#"]').length).toBe(0);
    });

    it('however, allows logged-in users to see the "Contact us" link', () => {
        // first we'll mount a new Footer instance for testing
        const wrapper = mount(
            <AppContext.Provider value={mockContextLoggedIn}>
                <Footer />
            </AppContext.Provider>
        );
        // now let's look for that link (I sure hope we see it!)
        expect(wrapper.find('a[href="#"]').length).toBe(1);
    });
});
