import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useNotification } from '../../context/BankProvider';
import { containerStyles } from './container.styles';

type ContainerProps = {
  children: JSX.Element;
};

function Container({ children }: ContainerProps) {
  const classes = containerStyles();

  return <div className={classes.root}>{children}</div>;
}

export default Container;
