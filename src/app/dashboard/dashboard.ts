import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExpenseData } from '../expense-data';
import { ExpenseApi } from '../expense-api';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  constructor(
    public expenseData: ExpenseData,
    private expenseApi: ExpenseApi
  )
  {
  }

  title = "Expense Tracker";

  expenseTitle = "";

  amount = 0;

  totalExpense = 0;

  addExpense()
  {
    const expense =
    {
      title: this.expenseTitle,
      amount: this.amount,
      expenseDate: new Date()
    };

    this.expenseApi.addExpense(expense)
      .subscribe();

    this.totalExpense =
      this.totalExpense + this.amount;

    this.expenseTitle = "";

    this.amount = 0;
  }

  deleteExpense(index: number)
  {
    this.totalExpense =
      this.totalExpense -
      this.expenseData.expenses[index].amount;

    this.expenseData.expenses.splice(index, 1);
  }
}