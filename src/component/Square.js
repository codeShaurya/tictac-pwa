import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import classnames from 'classnames';

const styles = theme => ({
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
  }
});

class Square extends Component {
  render() {
    const { classes, value, } = this.props;
    return (
      <div>
        <Button className={classnames(classes.square, classes.borderRow)} onClick={() => this.props.onClick()}>
          {value}
        </Button>
      </div >
    );
  }
}

Square.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Square);