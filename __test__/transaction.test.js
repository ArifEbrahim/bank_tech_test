const Transaction = require('../src/transaction');

describe('Transaction', () => {
  let transaction;

  test('it records the date', () => {
    transaction = new Transaction();
    expect(transaction.date).toEqual(expect.any(Date));
  });
  test('it records deposits', () => {
    transaction = new Transaction(50);
    expect(transaction.credit).toEqual(50);
  });
  test('it records withdrawls', () => {
    transaction = new Transaction(undefined, 50);
    expect(transaction.debit).toEqual(50);
  });
  test('it records the balance', () => {
    transaction = new Transaction(undefined, undefined, 50);
    expect(transaction.balance).toEqual(50);
  });
});
