import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import uiReducer from './reducers/uiReducer';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

// let's create our Redux store
const store = createStore(uiReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
