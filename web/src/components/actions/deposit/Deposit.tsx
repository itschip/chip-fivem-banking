import React from 'react';
import { useBankContext } from '../../../context/BankProvider';
import { Modal } from '../../ui/Modal';

export const Deposit = () => {
  const { modal, setModal } = useBankContext();

  const _handleClose = () => {
    console.log(modal);
    setModal(false);
  };

  return (
    <div>
      <Modal open={modal} handleClose={_handleClose}>
        <h1>Deposit</h1>
      </Modal>
    </div>
  );
};
