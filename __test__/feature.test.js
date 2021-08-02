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
    const transactionRecord = account.history[0];
    expect(transactionRecord.date.getDay()).toEqual(today.getDay());
    expect(transactionRecord.date.getMonth()).toEqual(today.getMonth());
  });
});
