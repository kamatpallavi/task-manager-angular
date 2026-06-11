import { Component, OnInit } from '@angular/core';
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
export class Dashboard implements OnInit {

  constructor(
    public expenseData: ExpenseData,
    private expenseApi: ExpenseApi
  )
  {
  }

  title = "Expense Tracker";

  expenses: any[] = [];

  expenseTitle = "";

  amount = 0;

  totalExpense = 0;

  ngOnInit()
  {
    this.loadExpenses();
  }

  loadExpenses()
  {
    this.expenseApi.getExpenses()
      .subscribe((data: any) =>
      {
        this.expenses = data;

        this.totalExpense = 0;

        for (let expense of this.expenses)
        {
          this.totalExpense =
            this.totalExpense + expense.amount;
        }
      });
  }
addExpense()
{
  if (!this.expenseTitle || this.amount <= 0)
  {
    return;
  }

  const expense =
  {
    title: this.expenseTitle,
    amount: this.amount,
    expenseDate: new Date()
  };

  this.expenseApi.addExpense(expense)
    .subscribe(() =>
    {
      this.loadExpenses();

      this.expenseTitle = "";

      this.amount = 0;
    });
}
  deleteExpense(expenseId: number)
{
  console.log("Delete Clicked:", expenseId);

  this.expenseApi.deleteExpense(expenseId)
    .subscribe({
      next: () =>
      {
        console.log("Deleted Successfully");
        this.loadExpenses();
      },
      error: (error) =>
      {
        console.log("Delete Error");
        console.log(error);
      }
    });
}
}