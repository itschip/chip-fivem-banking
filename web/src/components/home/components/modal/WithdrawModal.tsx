import React, { useState } from 'react';
import { TextField, Button, Box } from '@material-ui/core';
import { useWithdrawModal } from '../../../../context/BankProvider';
import Nui from '../../../../utils/nui/Nui';
import { Modal } from '../../../ui/Modal';

export default function WithdrawModal() {
  const [amount, setAmount] = useState('');
  const { withdrawModal, setWithdrawModal } = useWithdrawModal();

  const _handleClose = () => {
    setWithdrawModal(false);
  };

  const handleWithdraw = () => {
    Nui.send('nbwd:createWithdraw', {
      amount,
    });
  };

  return (
    <Modal open={withdrawModal} handleClose={_handleClose}>
      <Box
        flex
        justifyContent='space-between'
        alignItems='center'
        textAlign='center'
      >
        <div>
          <TextField
            value={amount}
            placeholder='$'
            type='number'
            onChange={(e) => setAmount(e.currentTarget.value)}
          />
        </div>
        <div style={{ marginTop: 20 }}>
          <Button
            onClick={handleWithdraw}
            color='secondary'
            variant='contained'
          >
            Withdraw
          </Button>
        </div>
      </Box>
    </Modal>
  );
}
