import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = () => ({
  root: {
    flexGrow: 1,
    margin: 'auto',
  },
  card: {
    minHeight: '225px',
    borderRadius: '17px',
    boxShadow: '0 4px 8px 3px rgb(34,139,34), 0 6px 20px 3px rgb(34,139,34)',
    marginTop: 20,
  },
  winner: {
    fontSize: '1rem',
    marginTop: 10,
    fontFamily: '"Press Start 2P", cursive',
    color: "rgb(34,139,34)"
  }
});

class WinnersHistory extends Component {
  render() {
    const { classes, winners } = this.props;

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Typography type="display1">
              Winners History:
            </Typography>
            {winners.map(winner => {
              return (
                <Typography paragraph className={classes.winner} key={winner.key}>
                  {`${winner.player.name} (${winner.player.code})`}
                </Typography>);
            })}
          </CardContent>
        </Card>
      </div>
    );
  }
}

WinnersHistory.propTypes = {
  classes: PropTypes.object.isRequired,
  winners: PropTypes.array
};

const mapStateToProps = (state) => {
  return {winners: state.fillSquare.winners}
};

export default connect(mapStateToProps)(
  withStyles(styles)(WinnersHistory),
);
