import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './page/home.component';
import {MatBadgeModule} from '@angular/material/badge'
import {MatButtonModule} from '@angular/material/button';
import { CoreModule } from '../../core/core.module';
import {MatIconModule} from '@angular/material/icon';
import { HomeModuleRoutingModule } from './home-module-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MatBadgeModule,
    MatButtonModule,
    CoreModule,
    MatIconModule,
    HomeModuleRoutingModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModuleModule { }
