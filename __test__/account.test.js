const Account = require('../src/account');

describe('Account', () => {
  let account;

  beforeEach(() => {
    account = new Account();
  });

  test('starts with a balance of 0', () => {
    expect(account.balance).toEqual(0);
  });

  describe('deposit', () => {
    test('allows users to add to the balance', () => {
      account.deposit(50);
      expect(account.balance).toEqual(50);
    });
  });

  describe('withdraw', () => {
    beforeEach(() => {
      account.deposit(50);
    });

    test('allows users to reduce the balance', () => {
      account.withdraw(25);
      expect(account.balance).toEqual(25);
    });
    test('throws an error if balance goes below 0', () => {
      expect(() => { account.withdraw(60); }).toThrow('You have insufficient funds, your balance is 50');
    });
  });
});
