import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseApi {

  constructor(private http: HttpClient)
  {
  }

  getExpenses()
  {
    return this.http.get(
      'https://localhost:7085/api/expenses'
    );
  }

  addExpense(expense: any)
  {
    return this.http.post(
      'https://localhost:7085/api/expenses',
      expense
    );
  }

  deleteExpense(id: number)
  {
    return this.http.delete(
      `https://localhost:7085/api/expenses/${id}`
    );
  }

}