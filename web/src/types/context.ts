interface ITransactions {
  id: number;
  type: TransactionType;
  date: string;
  amount: number;
}

interface ICredentials {
  name: string;
  balance: number;
}

enum TransactionType {
  deposit,
  withdraw,
  transfer,
}

export interface IBankContext {
  visibility: boolean;
  setVisibility: (show: boolean) => void;
  credentials: ICredentials;
  setCredentials: (creds: string) => void;
  transactions: ITransactions[];
  setTransactions: (transactions: string[]) => void;
  depositModal: boolean;
  setDepositModal: (show: boolean) => void;
  withdrawModal: boolean;
  setWithdrawModal: (show: boolean) => void;
  transferModal: boolean;
  setTransferModal: (show: boolean) => void;
}
