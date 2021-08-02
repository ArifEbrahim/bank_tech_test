# Bank tech test

This is a mock tech test.

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```
## Planning

### User stories

```
As a user,
So that I can manage my money,
I want to create a bank account.

As a user,
So that I can add to my balance,
I want to be able to make deposits. 

As a user,
So that I can use my money,
I want to be able to make withdrawls.

As a user,
So that I can track my account activity over time,
I want the date of each transaction to be recorded.

As a user,
So that I can see my account history,
I want to print an account statment. 

As a user,
So that I can see my latest transactions quickly,
I want the statement to be in reverse chronological order.
