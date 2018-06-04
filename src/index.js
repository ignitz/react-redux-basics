import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Provider } from "react-redux";

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

const store = createStore(
  combineReducers({ math: mathReducer, user: userReducer }),
  {},
  applyMiddleware(logger)
);

store.subscribe(() => {
  // console.log("Store updated", store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
