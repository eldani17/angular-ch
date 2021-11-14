//import ATM from "./models/atm";

class ATM {
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
// var stdin = process.openStdin();

// const listOption = () => {
//   console.log("Ingrese una opción:");
//   console.log("1- Ver saldo disponible");
//   console.log("2- Depositar dinero");
//   console.log("3- Retirar dinero");
// };

// const atm = new ATM();

// listOption();

// stdin.addListener("data", function (option: number) {
//   //console.log("you entered: [" + option.toString().trim() + "]");
//   switch (option) {
//     case 1:
//       console.log(`Saldos Disponible: ${atm.getAvailableBalance()}`);
//       break;

//     default:
//       console.log("Por favor seleccione una de las opciones");
//       listOption();
//       break;
//   }
// });

const atm = new ATM();
console.log(`Saldo Disponible: $${atm.getAvailableBalance()}`);
console.log(`Retirar $15.000: ${atm.getWithdrawMoney(15000)}`);
console.log(`Saldo Disponible: $${atm.getAvailableBalance()}`);
console.log(`Depositar $1.000: $${atm.setDepositMoney(1000)}`);
console.log(`Saldo Disponible: $${atm.getAvailableBalance()}`);
