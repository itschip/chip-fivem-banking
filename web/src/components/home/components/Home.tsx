import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import Actions from '../../actions/Actions';
import { Modal } from '../../ui/Modal';
import { useTransactions } from '../../../context/BankProvider';
import { transcode } from 'buffer';
import Transactions from '../../transactions/Transactions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%',
      margin: 10,
    },
    paper: {
      padding: theme.spacing(2),
      height: 'auto',
    },
  }),
);

function Home() {
  const classes = useStyles();

  const { transactions } = useTransactions();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Accounts</Typography>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper} style={{ marginBottom: 10 }}>
            <Actions />
          </Paper>

          <Paper className={classes.paper}>
            <Typography variant="h6">Transactions</Typography>
            <Transactions />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
