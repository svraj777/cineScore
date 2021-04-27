import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter as Router } from "react-router-dom";
// import { VerifyUser } from "./Redux/ActionCreator";
import { Reducer } from "./Redux/Reducer";
import { reqForData } from "./Redux/ActionCreator";

const middleware = [thunkMiddleware];
const Store = createStore(Reducer, composeWithDevTools(applyMiddleware(...middleware)));
Store.dispatch(reqForData());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
