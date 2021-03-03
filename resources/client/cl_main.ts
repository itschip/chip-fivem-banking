import { sendMessage } from '../utils/fivem';
import events from '../utils/events';
import { Deposit } from '../../web/src/types/actions';

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

RegisterNuiCallbackType(events.BANK_DEPOSIT_MONEY);
on(`__cfx_nui:${events.BANK_DEPOSIT_MONEY}`, (data: Deposit) => {
  emitNet(events.BANK_DEPOSIT_MONEY, data);
});
