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
  },
  winner: {
    fontSize: '2rem',
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
