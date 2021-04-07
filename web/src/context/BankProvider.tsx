import { useContext, createContext, useState } from 'react';
import { useNuiEvent } from 'fivem-nui-react-lib';
import { IBankContext } from '../types/context';

const BankContext = createContext<IBankContext>(undefined);

export default function BankProvider({ children }: any) {
  const [visibility, setVisibility] = useState<boolean>(false);
  const [credentials, setCredentials] = useState(null);
  const [transactions, setTransactions] = useState(null);
  const [depositModal, setDepositModal] = useState<boolean>(false);
  const [withdrawModal, setWithdrawModal] = useState<boolean>(false);
  const [transferModal, setTransferModal] = useState<boolean>(false);
  const [notification, setNotification] = useState(null);
  const [accounts, setAccounts] = useState(null);

  useNuiEvent('NBWD', 'setVisibility', setVisibility);
  useNuiEvent('NBWD', 'setCredentials', setCredentials);
  useNuiEvent('NBWD', 'setTransactions', setTransactions);
  useNuiEvent('NBWD', 'setNotification', setNotification);
  useNuiEvent('NBWD', 'setAccounts', setAccounts);

  const value = {
    visibility,
    setVisibility,
    credentials,
    transactions,
    depositModal,
    setDepositModal,
    withdrawModal,
    setWithdrawModal,
    transferModal,
    setTransferModal,
    notification,
    setNotification,
    accounts,
  };

  return <BankContext.Provider value={value}>{children}</BankContext.Provider>;
}

export const useVisibility = () => {
  const { visibility, setVisibility } = useContext(BankContext);
  return { visibility, setVisibility };
};

export const useCredentials = () => {
  const { credentials } = useContext(BankContext);
  return { credentials };
};

export const useTransactions = () => {
  const { transactions } = useContext(BankContext);
  return { transactions };
};

export const useDepositModal = () => {
  const { depositModal, setDepositModal } = useContext(BankContext);
  return { depositModal, setDepositModal };
};

export const useWithdrawModal = () => {
  const { withdrawModal, setWithdrawModal } = useContext(BankContext);
  return { withdrawModal, setWithdrawModal };
};

export const useTransferModal = () => {
  const { transferModal, setTransferModal } = useContext(BankContext);
  return { transferModal, setTransferModal };
};

export const useNotification = () => {
  const { notification, setNotification } = useContext(BankContext);
  return { notification, setNotification };
};

export const useAccounts = () => {
  const { accounts } = useContext(BankContext);
  return { accounts };
};
