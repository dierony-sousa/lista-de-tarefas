import { Routes } from '@angular/router';

// Pages
import { List } from './modules/to-do-list/pages/list/list';

export const routes: Routes = [
  {
    path: '',
    component: List,
  },
];
