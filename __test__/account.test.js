const Account = require('../src/account');

describe('Account', () => {
  let account;

  beforeEach(() => {
    account = new Account();
  });

  test('starts with a balance of 0', () => {
    expect(account.balance).toEqual(0);
  });
});