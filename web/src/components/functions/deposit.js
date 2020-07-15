import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ChildScreen } from "../screen/screen";

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Nui from '../../util/Nui';
import moment from "moment";
import NavButton from "../ui/ui";


import { TextInput } from "../ui/ui";

import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: '#2d3436',
    margin: 20,
    marginTop: 50,
    color: '#fff',
  },
  back: {
    float: 'right',
    marginLeft: 20,
  },
  alert: {
    width: "50%",
    left: "50%",
    transform: "translate(-50%, 0%)",
    margin: "auto",
    position: "absolute"
  }
}));

function Deposit() {


  const [value, setValue] = useState('');

  const handleDeposit = e => {
    console.log(value);
    Nui.send('depositAmount', {
      value,
      date
    });

  };

  const classes = useStyles();

  const date = moment().format('DD.MM.YYYY');

  return (
    <ChildScreen>
      <NavButton link={"/"} className={classes.back}>
        <ChevronLeftIcon/>
        Back
      </NavButton>
      <Paper className={classes.paper}>
        <Typography>Make a deposit</Typography>
        <TextInput 
            placeholder="$0" 
            type="number" 
            value={value}
            onChange={e => setValue(e.target.value)}
        />
        <br></br>
        <Button variant="contained" onClick={handleDeposit}>
          Confirm
        </Button>
      </Paper>
    </ChildScreen>
  );
}


export default Deposit;

setTimeout(() => {
  Nui.emulate('SEND_ALERT', {
      alert: "",
      message: ""
  });
});

//connect(mapStateToProps)
