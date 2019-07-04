import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseGuard } from './base/base-guard';
import { BASE_ROUTES } from './base/base-routing';
import { LOGIN_ROUTES } from './login/login-routing';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    children: LOGIN_ROUTES
  },
  {
    path: 'base',
    children: BASE_ROUTES,
    canActivate: [
      BaseGuard
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
