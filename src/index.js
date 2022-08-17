import React from "react";

import ReactDOM from "react-dom/client";

import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";

import App from "./App";

import Store from "./Redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={Store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
