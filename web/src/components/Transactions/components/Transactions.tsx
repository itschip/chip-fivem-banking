import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTransactions } from '../../../context/BankProvider';

const useStyles = makeStyles((theme) => ({
  listText: {
    fontWeight: 400,
    color: '#828C95',
  },
}));

export default function Transactions() {
  const classes = useStyles();
  const { transactions } = useTransactions();

  return (
    <List>
      {transactions.map((transaction) => (
        <ListItem divider>
          <ListItemText>
            <h4 className={classes.listText}>{transaction.type}</h4>
          </ListItemText>
          <ListItemText>
            <p className={classes.listText}>${transaction.amount}</p>
          </ListItemText>
          <ListItemText>
            <p className={classes.listText}>${transaction.date}</p>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}

setTimeout(() => {
  window.dispatchEvent(
    new MessageEvent('message', {
      data: {
        app: 'NBWD',
        method: 'setTransactions',
        data: [
          {
            id: 1,
            type: 'deposit',
            amount: 400,
            date: '4/7/2021',
          },
          {
            id: 2,
            type: 'deposit',
            amount: 400,
            date: '4/7/2021',
          },
        ],
      },
    }),
  );
}, 1000);
