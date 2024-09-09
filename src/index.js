import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // import Provider
import { store } from "./store"; // import your Redux store
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    {" "}
    {/* Wrap the app with Provider */}
    <App />
  </Provider>,
  document.getElementById("root")
);
