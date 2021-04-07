export interface Transactions {
  id: number;
  type: TransactionType;
  amount: number;
  date: Date;
  comment?: string;
}

enum TransactionType {
  deposit,
  withdraw,
  transfer,
}
