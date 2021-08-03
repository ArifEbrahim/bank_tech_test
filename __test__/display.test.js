const Display = require('../src/display');

describe('Display', () => {
  let display;

  beforeEach(() => {
    display = new Display();
  });

  test('it can display the statement header', () => {
    expect(display.print()).toEqual('date || credit || debit || balance');
  });

  test('it can display the date', () => {
    const mockHistory = {
      date: new Date('January 10, 2012, 11:00:00'),
    };
    expect(display.print(mockHistory)).toEqual('date || credit || debit || balance\n10/01/2012 ||');
  });

  test('it can display credit', () => {
    const mockHistory = {
      date: new Date('January 10, 2012, 11:00:00'),
      credit: 1000,
    };
    expect(display.print(mockHistory)).toEqual('date || credit || debit || balance\n10/01/2012 || 1000.00 || ||');
  });

  test('it can display debit', () => {
    const mockHistory = {
      date: new Date('January 10, 2012, 11:00:00'),
      credit: 0,
      debit: 250,
    };
    expect(display.print(mockHistory)).toEqual('date || credit || debit || balance\n10/01/2012 || || 250.00 ||');
  });
});
