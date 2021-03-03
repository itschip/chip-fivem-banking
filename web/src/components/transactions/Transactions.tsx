import React, { useState } from 'react';
import { useTransactions } from '../../context/BankProvider';
import { Collapse, List, ListItem, ListItemText } from '@material-ui/core';

export default function Transactions() {
  const [open, setOpen] = useState(false);

  const { transactions } = useTransactions();

  if (!transactions) {
    return <p>You don't seem to have any transactions yet!</p>;
  }

  return (
    <div>
      {transactions.map((transaction) => (
        <>
          <List>
            <ListItem
              key={transaction.id}
              divider={true}
              button={true}
              onClick={() => setOpen(!open)}
            >
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
