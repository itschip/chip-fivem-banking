import { Box, List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import { useAccounts } from '../../context/BankProvider';

export default function Accounts() {
  const { accounts } = useAccounts();

  if (!accounts) return <p>You don't have any accounts</p>;

  return (
    <List>
      {accounts.map((account) => (
        <ListItem key={account.id} divider button>
          <ListItemText
            primary={account.name}
            secondary={`$${account.balance}`}
          />
        </ListItem>
      ))}
    </List>
  );
}
