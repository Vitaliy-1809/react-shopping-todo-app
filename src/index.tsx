import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
// import AppClassic from "./App.ver1";
import AppCC from "./App.ver2";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./global/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      {/* Version 1 - classic approach */}
      {/* <AppClassic /> */}

      {/* Version 2 - Compound Components approach */}
      <AppCC />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
