import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
// comment
import App from "./App";
import store from "./store";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById("app")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./App", () => {
    const App = require("./App").default;
    render(App);
  });
}
