import { Component } from '@angular/core';
import { ExpenseData } from '../expense-data';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-summary',
  imports: [RouterLink],
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
