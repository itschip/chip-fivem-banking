import { ESX } from './server';

export const getSource = () => (global as any).source;

export const getIdentifier = (source: number): string => {
  return ESX.GetPlayerFromId(source).getIdentifier();
};

/**
 * Gets the current cash in hand, and adds it to the bank
 * @param player The source
 * @param amount
 */
export function createDeposit(player: number, amount: number): number {
  const Player = ESX.GetPlayerFromId(player);

  // gets both amounts
  const currentCash = Player.getMoney();

  if (currentCash > amount) {
    Player.removeMoney(amount);
    Player.addAccountMoney('bank', amount);
  }

  return amount;
}

/**
 *
 * @param player The source
 * @param amount
 */
export function createWithdraw(player: number, amount: number): number {
  const Player = ESX.GetPlayerFromId(player);

  // gets both amounts
  const currentBank = Player.getAccount('bank');

  if (currentBank.money > amount) {
    Player.removeAccountMoney('bank', amount);
    Player.addMoney(amount);
  }

  return amount;
}
