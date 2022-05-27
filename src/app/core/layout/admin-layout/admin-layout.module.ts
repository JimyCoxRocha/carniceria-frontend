import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './page/admin-layout.component';


@NgModule({
  declarations: [
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    RouterModule
  ]
})
export class AdminLayoutModule { }
