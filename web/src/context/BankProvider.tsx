import { useContext, createContext, useState } from 'react';
import { useNuiEvent } from '../utils/hooks/useNuiEvent';
import { IBankContext } from '../types/context';

const BankContext = createContext<IBankContext>(undefined);

export default function BankProvider({ children }: any) {
  const [visibility, setVisibility] = useState(false);
  const [credentials, setCredentials] = useState(null);
  const [transactions, setTransactions] = useState(null);
  const [depositModal, setDepositModal] = useState(false);
  const [withdrawModal, setWithdrawModal] = useState(false);
  const [transferModal, setTransferModal] = useState(false);

  useNuiEvent('NBWD', 'setVisibility', setVisibility);
  useNuiEvent('NBWD', 'setCredentials', setCredentials);
  useNuiEvent('NBWD', 'setTransactions', setTransactions);

  const value = {
    visibility,
    setVisibility,
    credentials,
    setCredentials,
    transactions,
    setTransactions,
    depositModal,
    setDepositModal,
    withdrawModal,
    setWithdrawModal,
    transferModal,
    setTransferModal,
  };

  return <BankContext.Provider value={value}>{children}</BankContext.Provider>;
}

export const useVisibility = () => {
  const { visibility, setVisibility } = useContext(BankContext);
  return { visibility, setVisibility };
};

export const useCredentials = () => {
  const { credentials, setCredentials } = useContext(BankContext);
  return { credentials, setCredentials };
};

export const useTransactions = () => {
  const { transactions, setTransactions } = useContext(BankContext);
  return { transactions, setTransactions };
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
