import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/initial',
    pathMatch: 'full',
  },
  {
    path: 'initial',
    loadComponent: () =>
      import('./pages/initial/initial.component').then(
        (m) => m.InitialComponent
      ),
  },
  {
    path: 'contatos',
    loadComponent: () =>
      import('./pages/contacts/contacts.component').then(
        (m) => m.ContactsComponent
      ),
  },
  {
    path: 'informacoes',
    loadComponent: () =>
      import('./pages/informations/informations.component').then(
        (m) => m.InformationsComponent
      ),
  },
  {
    path: 'cartoes',
    loadChildren: () =>
      import('./pages/cards/cards.routes').then((m) => m.cardsRoutes),
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },

  {
    path: 'not-found',
    component: NotFoundComponent,
  },
];
