import React from 'react';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';

interface State extends SnackbarOrigin {
  open: boolean;
}

export default function Notification() {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={false}
      message='some cool message'
    />
  );
}
