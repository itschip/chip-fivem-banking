import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    marginBottom: -15,
    color: '#202529',
    fontWeight: 600,
  },
  subTitle: {
    color: '#AAB2B8',
    fontWeight: 400,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Box>
      <h1 className={classes.title}>New Bank Who Dis</h1>
      <h4 className={classes.subTitle}>Welcome, chip</h4>
    </Box>
  );
}
