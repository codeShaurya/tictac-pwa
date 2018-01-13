import React from "react";
import ReactDOM from "react-dom";

import * as firebase from "firebase";

import { BrowserRouter } from "react-router-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";

// comment
import App from "./App";
import store from "./store";

const config = {
  apiKey: "AIzaSyAppTWg88GC6Zea0mZzwLBVtephnO29S6Y",
  authDomain: "tictac-shaurya.firebaseapp.com",
  databaseURL: "https://tictac-shaurya.firebaseio.com",
  projectId: "tictac-shaurya",
  storageBucket: "tictac-shaurya.appspot.com",
  messagingSenderId: "902131445856"
};
firebase.initializeApp(config);

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
