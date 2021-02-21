import { useContext, createContext, useState } from "react"

export interface IBankVisibility {
  visibility: boolean;
  setVisibility: (show: boolean) => void;
  credentials: string;
  setCredentials: (creds: string) => void;
  transactions: string[];
  setTransactions: (transactions: string[]) => void;
}

const BankContext = createContext<IBankVisibility>(null);


export default function BankProvider({ children }: any) {
  const [visibility, setVisibility] = useState<boolean>(false)
  const [credentials, setCredentials] = useState<string>(null)
  const [transactions, setTransactions] = useState<string[]>(null)


  const value = { 
    visibility, 
    setVisibility,
    credentials,
    setCredentials,
    transactions,
    setTransactions
  }

  return <BankContext.Provider value={value}>{children}</BankContext.Provider>
}


export const useVisibility = () => {
  const { visibility, setVisibility } = useContext(BankContext)
  return { visibility, setVisibility };
}

export const useCredentials = () => {
  const { credentials, setCredentials } = useContext(BankContext)
  return { credentials, setCredentials }
}

export const useTransactions = () => {
  const { transactions, setTransactions } = useContext(BankContext)
  return { transactions, setTransactions }
}