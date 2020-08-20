import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles(theme => ({
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

export const AlertMessage = (props) => {
    const [open, setOpen] = useState(true);
    const classes = useStyles();

    console.log(props.print)
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
          severity={props.alert} 
          className={classes.alert}
        >
          {props.message}
        </Alert>
        </Collapse>
      </div>
    )
}

