import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./paltrows-power-toes/App.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);

/*====== Adding the 1st two routes (#1) ===== */
//First we'll import the BrowserRouter via react-router-dom
//index.js ===> App.js
