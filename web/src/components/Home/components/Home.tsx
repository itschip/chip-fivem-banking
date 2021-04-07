import React from 'react';
import { Button, Grid, Paper } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Transactions from '../../Transactions/components/Transactions';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    paddingLeft: 20,
    paddingTop: 2,
    paddingBottom: 20,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={4}>
          <Paper variant='elevation' elevation={2} className={classes.paper}>
            <h3>Savings</h3>
            <p>$3454</p>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            variant='elevation'
            elevation={2}
            className={classes.paper}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 20,
            }}
          >
            <Button variant='contained' color='primary'>
              Withdraw
            </Button>
            <Button variant='contained' color='primary'>
              Transfer
            </Button>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Paper variant='elevation' elevation={2} className={classes.paper}>
            <h3>Transactions</h3>
            <Transactions />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
