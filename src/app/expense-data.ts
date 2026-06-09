import { Injectable } from '@angular/core';
import { Expense } from './expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseData {
     expenses: Expense[] = [];

}