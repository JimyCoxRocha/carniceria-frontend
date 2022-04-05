import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeComponent } from './page/home.component';
import {MatBadgeModule} from '@angular/material/badge'
import {MatButtonModule} from '@angular/material/button';
import { CoreModule } from '../../core/core.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule,
    MatBadgeModule,
    MatButtonModule,
    CoreModule
  ]
})
export class HomeModuleModule { }
