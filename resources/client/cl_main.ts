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

RegisterRawNuiCallback(
  events.BANK_CREATE_DEPOSIT,
  (data: any, cb: Function) => {
    const pData: Deposit = JSON.parse(data?.body);
    emitNet(events.BANK_CREATE_DEPOSIT, pData);
  },
);

RegisterRawNuiCallback(
  events.BANK_CREATE_WITHDRAW,
  (data: any, cb: Function) => {
    const pData: Withdraw = JSON.parse(data?.body);
    emitNet(events.BANK_CREATE_WITHDRAW, pData);
  },
);

onNet(events.BANK_SEND_TRANSACTIONS, (transactions: Transactions[]) => {
  sendMessage('setTransactions', transactions);
});
