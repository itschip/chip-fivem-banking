import { sendMessage } from '../utils/fivem';
import events from '../utils/events';
import { Deposit, Withdraw } from '../../web/src/types/actions';
import { Transactions } from '../../web/src/types/transactions';

RegisterCommand(
  'openbank',
  () => {
    sendMessage('setVisibility', true);
    emitNet(events.BANK_GET_CREDENTIALS);
  },
  false,
);

RegisterCommand(
  'closebank',
  () => {
    sendMessage('setVisibility', false);
  },
  false,
);

RegisterNuiCallbackType(events.BANK_CREATE_DEPOSIT);
on(`__cfx_nui:${events.BANK_CREATE_DEPOSIT}`, (data: Deposit) => {
  emitNet(events.BANK_CREATE_DEPOSIT, data);
});

RegisterNuiCallbackType(events.BANK_CREATE_WITHDRAW);
on(`__cfx_nui:${events.BANK_CREATE_WITHDRAW}`, (data: Withdraw) => {
  emitNet(events.BANK_CREATE_WITHDRAW, data);
});

onNet(events.BANK_SEND_TRANSACTIONS, (transactions: Transactions[]) => {
  sendMessage('setTransactions', transactions);
});
