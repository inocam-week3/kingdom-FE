import "./index.css";
import App from "./App";
import React from "react";
import { store } from "./redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle, theme } from "./components/common";
import { ThemeProvider } from "styled-components";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mock/broswer");
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>
);

reportWebVitals();
