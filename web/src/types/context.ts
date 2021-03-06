import { Transactions } from './transactions';
import { Credentials } from './credentials';
import { Accounts } from './accounts';

export interface IBankContext {
  visibility: boolean;
  setVisibility: (show: boolean) => void;
  credentials: Credentials;
  transactions: Transactions[];
  depositModal: boolean;
  setDepositModal: (show: boolean) => void;
  withdrawModal: boolean;
  setWithdrawModal: (show: boolean) => void;
  transferModal: boolean;
  setTransferModal: (show: boolean) => void;
  notification: string;
  setNotification: (message: string) => void;
  accounts: Accounts[];
}
