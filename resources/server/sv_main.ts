import { promisePool } from './db';
import { ESX } from './server';
import events from '../utils/events';
import {
  getSource,
  createDeposit,
  getIdentifier,
  createWithdraw,
} from './functions';
import { Deposit, Withdraw } from '../../web/src/types/actions';
import { Credentials } from '../../web/src/types/credentials';
import { Transactions } from '../../web/src/types/transactions';
async function getCredentials(identifier: string): Promise<Credentials> {
  // This is currently targeting the ESX framework.
  // If you're using a different framework, this will need to be changed
  const playerName = ESX.GetPlayerFromIdentifier(identifier).getName();

  const bankAmount = ESX.GetPlayerFromIdentifier(identifier).getAccount('bank')
    .money;

  return {
    name: playerName,
    balance: bankAmount,
  };
}

async function getTransactions(identifier: string): Promise<Transactions[]> {
  const query = `SELECT * FROM nbwd_bank_transactions WHERE identifier = ? ORDER by DESC`;

  const [results] = await promisePool.query(query, [identifier]);
  return <Transactions[]>results;
}

onNet(events.BANK_GET_CREDENTIALS, async () => {
  const pSource = getSource();
  try {
    const identifier = getIdentifier(pSource);
    const credentials = await getCredentials(identifier);
    emitNet(events.BANK_SEND_CREDENTIALS, pSource, credentials);
  } catch (error) {
    console.log(error);
  }
});

onNet(events.BANK_GET_TRANSACTIONS, async () => {
  const pSource = getSource();
  try {
    const identifier = getIdentifier(pSource);
    const transactions = await getTransactions(identifier);
    emitNet(events.BANK_SEND_TRANSACTIONS, pSource, transactions);
  } catch (error) {
    console.log(error);
  }
});

onNet(events.BANK_CREATE_DEPOSIT, (deposit: Deposit) => {
  const pSource = getSource();
  try {
    createDeposit(pSource, deposit.amount);
  } catch (error) {
    console.log(error);
  }
});

onNet(events.BANK_CREATE_WITHDRAW, (withdraw: Withdraw) => {
  const pSource = getSource();
  try {
    createWithdraw(pSource, withdraw.amount);
  } catch (error) {
    console.log(error);
  }
});
