import React from 'react';

// define a default user object, containing email, password, and isLoggedIn
const user = {
    email: '',
    password: '',
    isLoggedIn: false
};

// define a default logOut function
const logOut = () => {};

// use these default values to create the react Context we will export
const AppContext = React.createContext({
    user: user,
    logout: logOut
});

export default AppContext;
