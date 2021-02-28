import React from 'react';
import { Modal } from '../../ui/Modal';

export const Deposit = () => {

  const _handleClose = () => {
    console.log("modal");
  };

  return (
    <div>
      <Modal open={false} handleClose={_handleClose}>
        <h1>Deposit</h1>
      </Modal>
    </div>
  );
};
