import { Button } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    margin: 3,
  },
}));

export default function Actions() {
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.button} variant="contained" color="secondary">
        Withdraw
      </Button>
      <Button className={classes.button} variant="contained" color="secondary">
        Deposit
      </Button>
      <Button className={classes.button} variant="contained" color="secondary">
        Transfer
      </Button>
    </div>
  );
}
