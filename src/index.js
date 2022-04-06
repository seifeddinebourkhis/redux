import './index.css';
import store  from "./JS/store/store.js";
import  ReactDOM  from 'react-dom';
import App from "./App";
import { Provider } from "react-redux";
import React from "react"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);


