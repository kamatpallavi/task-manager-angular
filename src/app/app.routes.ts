import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Summary } from './summary/summary';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard
  },
  {
    path: 'summary',
    component: Summary
  }
];