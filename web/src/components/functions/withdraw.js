import React, { useState } from "react";

import { connect } from 'react-redux';

import Nui from "../../Util/Nui";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { TextInput } from "../ui/ui";
import moment from "moment";
import NavButton from "../ui/ui";
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';

import { ChildScreen } from "../screen/screen";


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
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      }
    },
    alert: {
      width: "40%",
      left: "50%",
      transform: "translate(-50%, 30%)",
      margin: "auto",
      position: "absolute",
      zIndex: 2000,
    }
  }));

function Withdraw({ message, alert }) {
    const classes = useStyles();
    const [value, setValue] = useState("");
    const [open, setOpen] = useState(false);

    const handleWithdraw = (e) => {
        console.log(value);
        Nui.send('withdrawAmount', {
          value,
          date
        });
        setOpen(true)
    }

    const AlertMessage = () => {
      return (
        <div className={classes.root}>
        <Collapse in={open}>
        <Alert 
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false)
              }}
              
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          variant="filled" 
          severity={alert} 
          className={classes.alert}
        >
          {message}
        </Alert>
        </Collapse>
      </div>
      )
    }

    const date = moment().format('DD.MM.YYYY');

    return (    
        <ChildScreen>
            <AlertMessage />
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

const mapStateToProps = state => ({ message: state.functions.message, alert: state.functions.alert })

export default connect(mapStateToProps)(Withdraw);