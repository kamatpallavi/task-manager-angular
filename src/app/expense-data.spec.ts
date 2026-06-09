import { TestBed } from '@angular/core/testing';

import { ExpenseData } from './expense-data';

describe('ExpenseData', () => {
  let service: ExpenseData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
