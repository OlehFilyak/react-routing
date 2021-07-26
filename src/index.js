import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

const application = (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(application, document.getElementById("root"));
registerServiceWorker();
