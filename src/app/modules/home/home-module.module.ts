import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HeaderModule } from 'src/app/core/header/header.module';
import { HomeComponent } from './page/home.component';
import {MatBadgeModule} from '@angular/material/badge'
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule,
    HeaderModule,
    MatBadgeModule,
    MatButtonModule
  ]
})
export class HomeModuleModule { }
