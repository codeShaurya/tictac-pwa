import React from 'react';
import ReactDOM from 'react-dom';

import * as firebase from 'firebase';

import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

// comment
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

const config = {
    apiKey: "AIzaSyChuAz0wKdf1nuxhQgHQjCjH2RRrYj6Wqo",
    authDomain: "tic-tac-too.firebaseapp.com",
    databaseURL: "https://tic-tac-too.firebaseio.com",
    projectId: "tic-tac-too",
    storageBucket: "",
    messagingSenderId: "684618674440"
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
    document.getElementById('app'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./App", () => {
    const App = require("./App").default;
    render(App);
  });
}

registerServiceWorker();