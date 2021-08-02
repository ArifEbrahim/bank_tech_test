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

});