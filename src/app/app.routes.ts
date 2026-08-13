import { Routes } from '@angular/router';
import { Landing } from './landing/landing';

export const routes: Routes = [
  {
    path: '',
    component: Landing,
    title: 'ZII — AI that works on your codebase',
  },
  { path: '**', redirectTo: '' },
];
