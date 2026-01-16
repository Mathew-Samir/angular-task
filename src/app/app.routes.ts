import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./pages/issues-list/issues-list').then(m => m.IssuesList),
    title: 'Home'
  },
  {
    path: 'issues-details/:id',
    loadComponent: () => import('./pages/issue-details/issue-details').then(m => m.IssueDetails),
    title: 'Issue Details'
  },
  {
    path: 'add-product',
    loadComponent: () => import('./pages/issue-create/issue-create').then(m => m.IssueCreate),
    title: 'Add Product'
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound),
    title: 'Not Found'
  },
];
