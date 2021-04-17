import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import {Provider,connect} from 'react-redux';
import {Reducer} from './reducers';

import 'tachyons';
const logger=createLogger();
const store=createStore(Reducer,applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
