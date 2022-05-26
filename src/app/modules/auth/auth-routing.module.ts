import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './page/login-component.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponentComponent
  },
  {
    path: 'register',
    component: LoginComponentComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
