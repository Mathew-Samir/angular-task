import { Routes } from '@angular/router';
import { IssuesList } from './pages/issues-list/issues-list';
import { IssueDetails } from './pages/issue-details/issue-details';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: IssuesList, title: 'Home' },
  { path: 'product-details/:id', component: IssueDetails, title: 'Product Details' },
  { path: '**', component: NotFound, title: 'Not Found' },
];
