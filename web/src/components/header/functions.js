// REACT
import React from 'react';
import PropTypes from 'prop-types';
import Nui from "../../util/Nui";

// MATERIAL UI
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// STYLES
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "#2d3436",
  },  
  name: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
  },
  balance: {
    marginRight: 20,
  }
}));

export default function Header({ name,  balance, onClose }) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.header}>
        <ToolBar>
          <h1 className={classes.name}>
            {name}
          </h1>

          <Typography className={classes.balance}>
            Bank: ${balance}
          </Typography>
          <Button variant="contained" onClick={onClose}>Close</Button>
        </ToolBar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
};


