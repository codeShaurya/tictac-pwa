import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import Header from './component/Header';
import Board from './component/Board';
import WinnerCard from './component/Winner';

class App extends Component {
  render() {
    const theme = createMuiTheme();
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Header />
          <Grid container >
            <Grid item xs={12} sm={12} lg={6}>
              <Board />
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <WinnerCard />
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;