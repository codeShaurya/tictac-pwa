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
  root:{
    backgroundColor:'#000000',
    position: 'absolute',
    top:0,
    left:0,
    height: '100%',
    width: '100%'
  },
  card: {
    minWidth: 275,
    borderRadius: '17px',
    boxShadow: '0 4px 8px 3px rgb(34,139,34), 0 6px 20px 3px rgb(34,139,34)',
    marginTop: 20,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
    fontFamily: '"Press Start 2P", cursive',
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
  flexGrow: {
    flex: '1 1 auto',
  },
  input: {
    fontFamily: '"Press Start 2P", cursive',
    textAlign:'center'
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
      player2: { name: Player2, code: code2 },
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
      <div className = {classes.root}>
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
                  InputProps={{
                    className: classes.input,
                  }}
                />
                <br />
                <TextField
                  id="Player1Code"
                  label="Player 1 Code"
                  placeholder="Enter Code"
                  className={classes.textField}
                  margin="normal"
                  onChange={this.onChangeCode1}
                  InputProps={{
                    className: classes.input,
                  }}
                />
                <br />
                <TextField
                  id="Player 2"
                  label="Player 2"
                  placeholder="Enter Name"
                  className={classes.textField}
                  margin="normal"
                  onChange={this.onChangePlayer2}
                  InputProps={{
                    className: classes.input,
                  }}
                />
                <br />
                <TextField
                  id="Player2Code"
                  label="Player 2 Code"
                  placeholder="Enter Code"
                  className={classes.textField}
                  margin="normal"
                  onChange={this.onChangeCode2}
                  InputProps={{
                    className: classes.input,
                  }}
                />
              </CardContent>
              <CardActions>
                <div className={classes.flexGrow} />
                <Button raised color="accent" onClick={this.onClick} >
                  <p1 className={classes.input}>Start Game</p1>
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
