import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';

import reducer from './reducer';

import { MainContainer } from './components/Main.jsx';

const initialState = fromJS({
  'email': '',
  'body': '',
  'hits': [],
  'validationError': false
})

const store = createStore(reducer, initialState, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,
  document.getElementById('app')
);
