import React, { useState } from "react";
import { connect } from 'react-redux';

import styled from "styled-components";
import { Link } from 'react-router-dom';
import Nui from "../../Util/Nui";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { TextInput } from "../ui/ui";
import moment from "moment";
import NavButton from "../ui/ui";

import { ChildScreen } from "../screen/screen"


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
      float: 'left',
      marginLeft: 20,
    },
    alert: {
      width: "50%",
      margin: "auto",
      left: "50%",
      transform: "translate(-50%, 0%)",
      position: "absolute"
    }
  }));

function Withdraw() {

    const [value, setValue] = useState("");

    const handleWithdraw = (e) => {
        console.log(value);
        Nui.send('withdrawAmount', {
          value,
          date
        });
        setTimeout(() => {
          setAlertDone(true)
        }, 2000)
    }

    const classes = useStyles();

    const date = moment().format('DD.MM.YYYY');

    return (    
        <ChildScreen>
            <NavButton link={"/"} className={classes.back}>
              <ChevronLeftIcon/>
              Back
            </NavButton>
            <Paper className={classes.paper}>
                <Typography>Make a withdraw</Typography>
                <TextInput 
                    placeholder="$0" 
                    type="number" 
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <br></br>
                <Button variant="contained" onClick={handleWithdraw}>
                  Confirm
                </Button>
            </Paper>
        </ChildScreen>
    )

}


export default Withdraw;