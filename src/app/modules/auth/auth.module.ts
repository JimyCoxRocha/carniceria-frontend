import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponentComponent } from './page/login-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialUIModule } from '../../core/material-ui.module';
import { RegisterComponentComponent } from './subviews/register-component.component';


@NgModule({
  declarations: [
    LoginComponentComponent,
    RegisterComponentComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule ,
    MaterialUIModule
  ]
})
export class AuthModule { }
