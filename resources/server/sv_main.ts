import { promisePool } from './db';
import events from '../utils/events';
import { ESX } from './server';
import { getSource, createDeposit, getIdentifier } from './functions';
import { Deposit } from '../../web/src/types/actions';
import { Credentials } from '../../web/src/types/credentials';

async function getCredentials(identifier: string): Promise<Credentials> {
  // This is currently targeting the ESX identity setup.
  // If you're using a different framework, this will most likely need to be changed
  const query = `SELECT firstname, lastname FROM users WHERE identifier = ?`;
  const [result] = await promisePool.query(query, [identifier]);
  const credentials = <Credentials[]>result;

  const bankAmount = ESX.GetPlayerFromIdentifier(identifier).getAccount('bank')
    .money;

  return {
    firstname: credentials[0].firstname,
    lastname: credentials[0].lastname,
    money: bankAmount,
  };
}

onNet(events.BANK_DEPOSIT_MONEY, (deposit: Deposit) => {
  const pSource = getSource();
  try {
    createDeposit(pSource, deposit.amount);
  } catch (error) {
    console.log(error);
  }
});

onNet(events.BANK_GET_CREDENTIALS, async () => {
  const pSource = getSource();
  try {
    const identifier = getIdentifier(pSource);
    const credentials = await getCredentials(identifier);
  } catch (error) {
    console.log(error);
  }
});