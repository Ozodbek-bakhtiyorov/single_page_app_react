import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'aos/dist/aos.css';
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import { Provider } from "react-redux";
import { store } from "./redux/store";
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
