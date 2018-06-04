// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

const mathReducer = (
  state = {
    result: 1,
    lastValues: []
  },
  action
) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    case "SUBTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
  }
  return state;
};

const userReducer = (
  state = {
    name: "Yuri",
    age: 31
  },
  action
) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      };
      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload
      };
      break;
  }
  return state;
};

// useless... logger is better
const myLogger = store => next => action => {
  console.log("Logged Action: ", action);
  next(action);
};

const store = createStore(
  combineReducers({ mathReducer, userReducer }),
  {},
  applyMiddleware(logger)
);

store.subscribe(() => {
  // console.log("Store updated", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 100
});

store.dispatch({
  type: "ADD",
  payload: 22
});

store.dispatch({
  type: "ADD",
  payload: 10
});

store.dispatch({
  type: "SUBTRACT",
  payload: 80
});

store.dispatch({
  type: "SET_AGE",
  payload: 27
});
