import { useContext, createContext, useState } from 'react';
import { useNuiEvent } from '../utils/hooks/useNuiEvent';

export interface IBankContext {
  visibility: boolean;
  setVisibility: (show: boolean) => void;
  credentials: string;
  setCredentials: (creds: string) => void;
  transactions: string[];
  setTransactions: (transactions: string[]) => void;
  modal: boolean;
  setModal: (show: boolean) => void;
}

const BankContext = createContext<IBankContext>(undefined);

export default function BankProvider({ children }: any) {
  const [visibility, setVisibility] = useState(true);
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
    modal,
    setModal,
  };

  return <BankContext.Provider value={value}>{children}</BankContext.Provider>;
}

export const useBankContext = () => {
  const value = useContext(BankContext);
  return value;
};
