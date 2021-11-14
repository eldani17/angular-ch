export default class ATM {
  private availableBalance: number = 100000;

  constructor() {}

  public getAvailableBalance = (): number => {
    return this.availableBalance;
  };

  public getWithdrawMoney = (balance: number): void => {
    this.availableBalance -= balance;
  };

  public setDepositMoney = (balance: number): void => {
    this.availableBalance += balance;
  };
}
