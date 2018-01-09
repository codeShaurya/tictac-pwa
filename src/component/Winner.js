import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    minWidth: 275,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
});

class WinnerCard extends Component {
  render() {
    const { classes, player1, player2 } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography type="body1" className={classes.title}>
              Game turns
            </Typography>
          </CardContent>
          <CardActions>
            <Button dense>total turns</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

WinnerCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WinnerCard);
