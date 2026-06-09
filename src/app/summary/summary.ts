import { Component } from '@angular/core';
import { ExpenseData } from '../expense-data';

@Component({
  selector: 'app-summary',
  imports: [],
  templateUrl: './summary.html',
  styleUrl: './summary.css',
})
export class Summary {

  constructor(public expenseData: ExpenseData) {
  }
  getTotalExpenses()
{
    return this.expenseData.expenses.length;
}
  getTotalAmount()
{
    let total = 0;

    for(let expense of this.expenseData.expenses)
    {
        total = total + expense.amount;
    }

    return total;
}

}
