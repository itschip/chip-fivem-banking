import { Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import Actions from '../../actions/Actions';
import {
  useTransactions,
  useWithdrawModal,
} from '../../../context/BankProvider';
import Transactions from '../../transactions/Transactions';
import WithdrawModal from './modal/WithdrawModal';

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
    overlay: {
      background: 'black',
      opacity: '0.6',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 5,
    },
  }),
);

function Home() {
  const classes = useStyles();

  //const { transactions } = useTransactions();
  const { withdrawModal } = useWithdrawModal();

  return (
    <div className={classes.root}>
      <WithdrawModal />
      <div className={withdrawModal ? classes.overlay : undefined} />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography variant='h6'>Accounts</Typography>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper} style={{ marginBottom: 10 }}>
            <Actions />
          </Paper>

          <Paper className={classes.paper}>
            <Typography variant='h6'>Transactions</Typography>
            <Transactions />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
