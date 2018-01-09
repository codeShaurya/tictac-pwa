import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import Grid from 'material-ui/Grid';
import Header from './Header';
import Board from './Board';
import WinnerCard from './Winner';

import fillsquare from '../action/fillsquare';

class Game extends Component {
  render() {
    return (
      <div>
        <Header />
        <Grid container >
          <Grid item xs={12} sm={12} lg={6}>
            <Board {...this.props} />
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <WinnerCard />
          </Grid>
        </Grid>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return state;
}

function mapDispachToProps(dispatch) {
  return bindActionCreators({ fillsquare }, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(Game);
