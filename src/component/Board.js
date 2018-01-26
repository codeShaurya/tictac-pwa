import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';

import Square from './Square';

const styles = (theme) => ({
  root: {},
  card: {
    display: 'flex',
    flexDirection: 'column',
  },
  player: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  info: {
    alignSelf: 'flex-start',
    padding: '2px',
  },
  boardRow: {
    clear: 'both',
    content: '',
    display: 'row',
  },
});

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // handleClick(i, winner) {
  //   const { squares } = this.state;
  //   if (winner(squares)||squares[i])
  //     return;
  //   squares[i] = this.state.xNext ? 'X' : 'O';
  //   this.setState({
  //     squares: squares,
  //     xNext: !this.state.xNext,
  //   });
  // }

  // winner(squares) {
  //   const pos = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6],
  //   ];
  // onClick={() => this.handleClick(p, this.winner)}
  //   for (var i = 0; i < 8; i++) {
  //     const [a, b, c] = pos[i];
  //     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
  //       return squares[a];//winner
  //   }
  //   return null;
  // }

  render() {
    const { classes, fillSquare } = this.props;

    const { xNext, winner, player1, player2 } = fillSquare;

    const num1 = ['0', '1', '2'];
    const num2 = ['3', '4', '5'];
    const num3 = ['6', '7', '8'];

    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <div className={classes.player}>
              <Typography type="display1" className={classes.info}>
                {`Next Player is : ${xNext ? player1.name : player2.name}`}
              </Typography>
              <Typography
                type="display1"
                color="primary"
                className={classes.info}
              >
                {winner}
              </Typography>
            </div>
          </CardContent>
          <CardContent>
            <div className={classes.boardRow}>
              {num1.map((p, i) => <Square key={i} index={i} />)}
            </div>
            <div className={classes.boardRow}>
              {num2.map((p, i) => <Square key={i} index={i + 3} />)}
            </div>
            <div className={classes.boardRow}>
              {num3.map((p, i) => <Square key={i} index={i + 6} />)}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

Board.propTypes = {
  classes: PropTypes.object.isRequired,
  fillSquare: PropTypes.object,
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(Board),
);