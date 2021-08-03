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
      date: new Date('January 14, 2012, 11:00:00'),
    };
    expect(display.print(mockHistory)).toEqual('date || credit || debit || balance\n14/01/2012');
  });
});
