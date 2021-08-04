const Account = require('../src/account');

jest.mock('../src/statement');
const Statement = require('../src/statement');

describe('Account', () => {
  let account;
  let transactionMock;
  let statementMock;

  beforeEach(() => {
    transactionMock = jest.fn();
    statementMock = new Statement();
    account = new Account(transactionMock, statementMock);
  });

  test('starts with a balance of 0', () => {
    expect(account.balance).toEqual(0);
  });

  describe('deposit', () => {
    beforeEach(() => {
      account.deposit(50);
    });
    test('allows users to add to the balance', () => {
      expect(account.balance).toEqual(50);
    });
    test('throws an error if a negative number is entered', () => {
      expect(() => { account.deposit(-50); }).toThrow('Cannot deposit negative numbers, please enter again');
    });
    test('creates a new transaction', () => {
      expect(transactionMock).toHaveBeenCalledWith(50, undefined, 50);
    });
  });

  describe('withdraw', () => {
    beforeEach(() => {
      account.deposit(50);
      account.withdraw(25);
    });

    test('allows users to reduce the balance', () => {
      expect(account.balance).toEqual(25);
    });
    test('throws an error if balance goes below 0', () => {
      expect(() => { account.withdraw(60); }).toThrow('You have insufficient funds, your balance is 25');
    });
    test('throws an error if a negative number is entered', () => {
      expect(() => { account.withdraw(-10); }).toThrow('Cannot withdraw negative numbers, please enter again');
    });
    test('creates a new transaction', () => {
      expect(transactionMock).toHaveBeenCalledWith(undefined, 25, 25);
    });
  });

  describe('history', () => {
    test('the account starts with an empty history', () => {
      expect(account.history).toEqual([]);
    });
    test('transactions are stored within the history', () => {
      account.deposit(50);
      expect(account.history.length).toEqual(1);
    });
  });

  describe('printStatement', () => {
    test('the account can request a printed statement', () => {
      jest.spyOn(statementMock, 'print');
      account.printStatement();
      expect(statementMock.print).toHaveBeenCalledWith(account.history);
    });
  });
});
