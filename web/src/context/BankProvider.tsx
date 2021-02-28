import { useContext, createContext, useState } from 'react';
import { useNuiEvent } from '../utils/hooks/useNuiEvent';
import Bank from '../Bank';

export interface IBankContext {
  visibility: boolean;
  setVisibility: (show: boolean) => void;
  credentials: string;
  setCredentials: (creds: string) => void;
  transactions: string[];
  setTransactions: (transactions: string[]) => void;
}

const BankContext = createContext<IBankContext>(undefined);

export default function BankProvider({ children }: any) {
  const [visibility, setVisibility] = useState(false);
  const [credentials, setCredentials] = useState(null);
  const [transactions, setTransactions] = useState(null);
  const [modal, setModal] = useState(false);

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
