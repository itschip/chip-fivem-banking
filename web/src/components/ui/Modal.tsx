import { Paper, Button } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import React, { useEffect } from 'react';

interface IModal {
  children: React.ReactNode;
  open: any;
  handleClose: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: '24px',
    zIndex: 10,
    width: '50%',
    display: 'flex',
    flexFlow: 'column nowrap',
    position: 'absolute',
    top: '80px',
  },
  displayBlock: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  displayNone: {
    display: 'none',
  },
  closeModalButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '10%',
  },
}));

export const Modal = ({ children, open, handleClose }: IModal) => {
  const classes = useStyles();

  const handleEscape = (e: any) => {
    const isEscapeKey = e.key === 'Escape' || e.key === 'Esc';
    if (isEscapeKey) {
      e.preventDefault();
      handleClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscape, true);
    return () => window.removeEventListener('keydown', handleEscape);
  });

  const showHideModal = open ? classes.displayBlock : classes.displayNone;

  return (
    <div className={showHideModal}>
      <Paper className={classes.root}>
        <Button onClick={handleClose} className={classes.closeModalButton}>
          <CloseIcon />
        </Button>
        {children}
      </Paper>
    </div>
  );
};
