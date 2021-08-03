class Display {
  constructor() {
    this.HEADER = 'date || credit || debit || balance';
  }
  print(history) {
    if (!history) {
      return this.HEADER;
    } 
    let displayString;
    let formattedDate = history.date.toLocaleDateString();
    displayString = `${this.HEADER}\n${formattedDate}`;
    return displayString;
  }
}

module.exports = Display;
