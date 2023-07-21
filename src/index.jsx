import "./index.css";
import App from "./App";
import React from "react";
import { store } from "./redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mock/broswer')
  worker.start()
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
