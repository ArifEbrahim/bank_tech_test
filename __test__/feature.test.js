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
});
