import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import withRouter from 'react-router/withRouter';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Header from './Header';
import Board from './Board';
import WinnerCard from './Winner';
import WinnersHistory from './WinnersHistory';

import fillsquare from '../action/fillsquare';

const styles = theme => ({
  root: {
    backgroundColor:'#000000',
    position:'absolute',
    top:0,
    left:0,
    width: '100%',
    height:'100%'
  }
});

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} >
        <Header />
        <Grid container justify="space-around">
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <Board />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <WinnerCard />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <WinnersHistory />
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fillsquare }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(withRouter(Game)));
