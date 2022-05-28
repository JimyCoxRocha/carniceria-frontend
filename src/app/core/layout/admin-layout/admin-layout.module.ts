import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './page/admin-layout.component';
import { MaterialUIModule } from '../../material-ui.module';
import { AdmSidenavComponent } from './components/sidenav/adm-sidenav.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdmSidenavComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    RouterModule,
    MaterialUIModule
    
  ]
})
export class AdminLayoutModule { }
