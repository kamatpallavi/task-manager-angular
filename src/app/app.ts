import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Expense } from './expense';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  title = "Expense Tracker";

  expenseTitle = "";

  amount = 0;

  totalExpense = 0;

  expenses: Expense [] = [];

  addExpense()
  {
    const expense =
    {
      title: this.expenseTitle,
      amount: this.amount,
        date: new Date().toLocaleDateString()
    };

    this.expenses.push(expense);

    this.totalExpense =
      this.totalExpense + this.amount;

    this.expenseTitle = "";

    this.amount = 0;
  }
deleteExpense(index:number)
{
    /*console.log("Index:", index);
    console.log("Expenses:", this.expenses);
    console.log("Selected Expense:", this.expenses[index]);   */

    this.totalExpense =
        this.totalExpense -
        this.expenses[index].amount;

    this.expenses.splice(index,1);
}

}