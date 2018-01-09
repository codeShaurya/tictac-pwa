import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';

import Game from './component/Game';
import Home from './component/Home';

class App extends Component {
  render() {
    const theme = createMuiTheme();

    return (
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route
            exact
            path={'/tic-tac'}
            component={Game}
          />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;
