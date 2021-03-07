import React from 'react';
import { useTransactions } from '../../context/BankProvider';
import { List, ListItem, ListItemText } from '@material-ui/core';

export default function Transactions() {
  const { transactions } = useTransactions();

  if (!transactions) {
    return <p>You don't seem to have any transactions yet!</p>;
  }

  return (
    <div>
      {transactions.map((transaction) => (
        <>
          <List>
            <ListItem key={transaction.id} divider={true}>
              <ListItemText
                primary={transaction.type}
                secondary={`$${transaction.amount}`}
              />
              <ListItemText>{transaction.date}</ListItemText>
            </ListItem>
          </List>
        </>
      ))}
    </div>
  );
}
