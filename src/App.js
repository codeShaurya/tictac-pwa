import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import Header from './component/Header';
import Board from './component/Board';
import WinnerCard from './component/Winner';

import fillsquare from './action/fillsquare';

class App extends Component {
  render() {
    const theme = createMuiTheme();

    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Header />
          <Grid container >
            <Grid item xs={12} sm={12} lg={6}>
              <Board {...this.props}/>
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


function mapStateToProps(state) {
  return state;
}

function mapDispachToProps(dispatch) {
  return bindActionCreators({fillsquare}, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(App);