import { Routes } from '@angular/router';
import { CardsComponent } from './cards.component';
import { CreditComponent } from './components/credit/credit.component';
import { DebitComponent } from './components/debit/debit.component';

export const cardsRoutes: Routes = [
  {
    path: '',
    redirectTo: 'debit',
    pathMatch: 'full',
  },
  {
    path: '',
    component: CardsComponent,
    children: [
      {
        path: 'credit',
        component: CreditComponent,
      },
      {
        path: 'debit',
        component: DebitComponent,
      },
    ],
  },
];
