import React, { Component } from 'react';
import Square from './Square';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import classnames from 'classnames';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '5%',
  },
  boardRow: {
    clear: 'both',
    content: '',
    display: 'row',
  }
});

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xNext: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.winner = this.winner.bind(this);
  }

  handleClick(i, winner) {
    const { squares } = this.state;
    if (winner(squares)||squares[i])
      return;
    squares[i] = this.state.xNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xNext: !this.state.xNext,
    });
  }

  winner(squares) {
    const pos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (var i = 0; i < 8; i++) {
      const [a, b, c] = pos[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];//winner
    }
    return null;
  }

  render() {
    const { classes ,fillsquare,fillSquare} = this.props;
    const { squares } = this.state;
    const playerNext = this.state.xNext ? 'X' : 'O';
    const playerNexts = this.winner(squares);;
    const num1 = ['0', '1', '2'];
    const num2 = ['3', '4', '5'];
    const num3 = ['6', '7', '8'];
    return (
      <div className={classes.root}>
        <h2>Next Player:   {playerNext}  Winner is:{playerNexts}</h2>
        <div className={classes.boardRow}>
          {num1.map((p, i) => (
            <Square
              value={squares[p]}
              key={i}
              onClick={() => this.handleClick(p, this.winner)}
            />
          ))}
        </div>
        <div className={classes.boardRow}>
          {num2.map((p, i) => (<Square
            value={squares[p]}
            key={i}
            onClick={() => this.handleClick(p, this.winner)}
          />
          ))}
        </div>
        <div className={classes.boardRow}>
          {num3.map((p, i) => (<Square
            value={squares[p]}
            key={i}
            onClick={() => this.handleClick(p, this.winner)}
          />
          ))}
        </div>
      </div >
    );
  }
}

Board.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Board);