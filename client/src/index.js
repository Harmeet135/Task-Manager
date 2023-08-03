// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './redux/reducers/rootReducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk)); 

ReactDOM.render(
  <Provider store={store}> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
