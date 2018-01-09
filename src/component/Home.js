import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRouter from 'react-router/withRouter';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';

import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

import Header from './Header';

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
      player1: '',
      player2: '',
      code1: '',
      code2: '',
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    setTimeout(() => {
      this.props.history.push('tic-tac');
    }, 1000);
  }

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
                />
                <br />
                <TextField
                  id="Player1Code"
                  label="Player 1 Code"
                  placeholder="Enter Code"
                  className={classes.textField}
                  margin="normal"
                />
                <br />
                <TextField
                  id="Player 2"
                  label="Player 2"
                  placeholder="Enter Name"
                  className={classes.textField}
                  margin="normal"
                />
                <br />
                <TextField
                  id="Player2Code"
                  label="Player 2 Code"
                  placeholder="Enter Code"
                  className={classes.textField}
                  margin="normal"
                />
              </CardContent>
              <CardActions>
                <div className={classes.flexGrow} />
                <Button
                  raised
                  color="accent"
                  onClick={this.onClick}
                >Start Game</Button>
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

export default withStyles(styles)(withRouter(Home));
