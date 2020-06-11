import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const rules = {
  errorCount: 8
};

ReactDOM.render(
    <App errorCount={rules.errorCount}/>, document.querySelector(`#root`)
);
