import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ExpenseApi } from '../expense-api';

@Component({
  selector: 'app-summary',
  imports: [CommonModule, RouterLink],
  templateUrl: './summary.html',
  styleUrl: './summary.css'
})
export class Summary implements OnInit {

  expenses: any[] = [];

  totalAmount = 0;

  constructor(private expenseApi: ExpenseApi)
  {
  }

  ngOnInit()
  {
    this.loadExpenses();
  }

  loadExpenses()
  {
    this.expenseApi.getExpenses()
      .subscribe((data: any) =>
      {
        console.log('Summary Data:', data);

        this.expenses = data;

        this.totalAmount = 0;

        for (let expense of this.expenses)
        {
          this.totalAmount += Number(expense.amount);
        }

        console.log('Total Amount:', this.totalAmount);
      });
  }
}