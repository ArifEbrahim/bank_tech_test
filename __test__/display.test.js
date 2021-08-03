const Display = require('../src/display');

describe('Display', () => {
  let display;
  const singleTransactionMock = [{
    date: new Date('January 10, 2012, 11:00:00'),
    credit: 0,
    debit: 0,
    balance: 900,
  }];
  const multipleTransactionMock = [
    {
      date: new Date('January 10, 2012, 11:00:00'),
      credit: 1000,
      debit: 0,
      balance: 1000,
    },
    {
      date: new Date('January 14, 2012, 11:00:00'),
      credit: 0,
      debit: 500,
      balance: 500,
    }];

  beforeEach(() => {
    display = new Display();
  });

  test('it can display the statement header with no history', () => {
    expect(display.print()).toEqual('date || credit || debit || balance');
  });

  describe('for one transaction', () => {
    test('it can display credit', () => {
      singleTransactionMock[0].credit = 1000;
      expect(display.print(singleTransactionMock)).toEqual('date || credit || debit || balance\n10/01/2012 || 1000.00 || || 900.00');
    });
    test('it can display debit', () => {
      singleTransactionMock[0].credit = 0;
      singleTransactionMock[0].debit = 250;
      expect(display.print(singleTransactionMock)).toEqual('date || credit || debit || balance\n10/01/2012 || || 250.00 || 900.00');
    });
    test('it can display balance', () => {
      expect(display.print(singleTransactionMock)).toEqual('date || credit || debit || balance\n10/01/2012 || || 250.00 || 900.00');
    });
  });

  describe('for multiple transactions', () => {
    test('it shows the transactions in reverse chronological order', () => {
      expect(display.print(multipleTransactionMock)).toEqual('date || credit || debit || balance\n14/01/2012 || || 500.00 || 500.00\n10/01/2012 || 1000.00 || || 1000.00');
    });
  });
});
