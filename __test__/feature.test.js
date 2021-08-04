const Account = require('../src/account');

describe('Feature test', () => {
  let account;

  beforeEach(() => {
    account = new Account();
  });

  // As a user,
  // So that I can manage my money,
  // I want to create a bank account.

  test('users can create an empty bank account', () => {
    expect(account.balance).toEqual(0);
  });

  // As a user,
  // So that I can add to my balance,
  // I want to be able to make deposits.

  test('users can make deposits', () => {
    account.deposit(50);
    expect(account.balance).toEqual(50);
  });

  // As a user,
  // So that I can use my money,
  // I want to be able to make withdrawls.

  test('users can make withdrawls', () => {
    account.deposit(50);
    account.withdraw(25);
    expect(account.balance).toEqual(25);
  });

  // As a user,
  // So that I can track my account activity over time,
  // I want the date of each transaction to be recorded.

  test('the date associated with a transaction is recorded', () => {
    account.deposit(50);
    const today = new Date();
    const transactionRecordDate = account.history[0].date;
    expect(transactionRecordDate.getDay()).toEqual(today.getDay());
    expect(transactionRecordDate.getMonth()).toEqual(today.getMonth());
  });

  // As a user,
  // So that I can see my account history,
  // I want to print an account statment.

  // As a user,
  // So that I can see my latest transactions quickly,
  // I want the statement to be in reverse chronological order.

  test('users can request a statement', () => {
    account.deposit(50);
    account.withdraw(25);
    const today = new Date();
    expect(account.printStatement()).toEqual(`date || credit || debit || balance\n${today.toLocaleDateString()} || || 25.00 || 25.00\n${today.toLocaleDateString()} || 50.00 || || 50.00`);
  });
});
