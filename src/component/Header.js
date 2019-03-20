import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: 90,
  },
  flex: {
    flex: 1,
    textAlign:'center',
    fontFamily: '"Press Start 2P", cursive',
    color:'#ffffff'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color:'#ffffff'
  },
});

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar disableGutters = "">
          <Typography type="title" color="inherit" className={classes.flex}>
            TIC-TAC
          </Typography>
          <Button color="contrast">
          <p1 className={classes.flex}> Login </p1>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
