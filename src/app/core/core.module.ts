import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatListModule} from '@angular/material/list';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule
  ],
  exports: [
    HeaderComponent,
    MainLayoutComponent
  ]
})
export class CoreModule { }
