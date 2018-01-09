import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRouter from 'react-router/withRouter';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import Header from './Header';

import actionPlayer from '../action/player';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
  flexGrow: {
    flex: '1 1 auto',
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Player1: '',
      Player2: '',
      code1: '',
      code2: '',
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { Player1, Player2, code1, code2 } = this.state;

    this.props.actionPlayer({
      player1: { name: Player1, code: code1 },
      player2: { name: Player2, code: code1 },
    });

    setTimeout(() => {
      this.props.history.push('tic-tac');
    }, 1000);
  }

  onChangePlayer1 = (e) => { this.setState({ Player1: e.target.value }); }
  onChangePlayer2 = (e) => { this.setState({ Player2: e.target.value }); }
  onChangeCode1 = (e) => { this.setState({ code1: e.target.value }); }
  onChangeCode2 = (e) => { this.setState({ code2: e.target.value }); }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Header />
        <Grid
          container
          spacing={0}
          justify="center"
          alignContent="center"
          alignItems="center"
        >
          <Grid item xl={6} lg={4} md={6} sm={12} xs={12}>
            <Card className={classes.card}>
              <CardContent>
                <TextField
                  id="player1"
                  label="Player 1"
                  placeholder="Enter Name"
                  className={classes.textField}
                  margin="normal"
                  onChange={this.onChangePlayer1}
                />
                <br />
                <TextField
                  id="Player1Code"
                  label="Player 1 Code"
                  placeholder="Enter Code"
                  className={classes.textField}
                  margin="normal"
                  onChange={this.onChangeCode1}
                />
                <br />
                <TextField
                  id="Player 2"
                  label="Player 2"
                  placeholder="Enter Name"
                  className={classes.textField}
                  margin="normal"
                  onChange={this.onChangePlayer2}
                />
                <br />
                <TextField
                  id="Player2Code"
                  label="Player 2 Code"
                  placeholder="Enter Code"
                  className={classes.textField}
                  margin="normal"
                  onChange={this.onChangeCode2}
                />
              </CardContent>
              <CardActions>
                <div className={classes.flexGrow} />
                <Button raised color="accent" onClick={this.onClick} >
                  Start Game
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => bindActionCreators({
  actionPlayer,
}, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(withRouter(Home)));
