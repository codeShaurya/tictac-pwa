import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withRouter from 'react-router/withRouter';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import classnames from 'classnames';

import actionFillSquare from '../action/fillsquare';

const styles = (theme) => ({
  root: {
    font: '14px "Century Gothic", Futura, sans-serif',
    margin: '20px',
  },

  square: {
    background: '#fff',
    border: '1px solid #999',
    float: 'left',
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '34px',
    height: '34px',
    marginRight: '- 1px',
    margintop: ' - 1px',
    padding: '0',
    textalign: 'center',
    width: '34px',
  },
  boardRow: {
    clear: 'both',
    content: '',
    display: 'table',
  },
});

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onClickSquare = this.onClickSquare.bind(this);
  }

  onClickSquare(e) {
    const { index, fillSquare, winner } = this.props;
    const { xNext, board } = fillSquare;

    if (typeof winner !== 'undefined' || board[index]) {
      return;
    }
    this.props.actionFillSquare({ xNext, index });
  }

  render() {
    const { classes, fillSquare, index } = this.props;
    const { board } = fillSquare;
    return (
      <div>
        <Button
          className={classnames(classes.square, classes.borderRow)}
          onClick={this.onClickSquare}
        >
          {board[index] || ''}
        </Button>
      </div>
    );
  }
}

Square.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      actionFillSquare,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(withRouter(Square)),
);
