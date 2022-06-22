import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './page/home.component';
import {MatBadgeModule} from '@angular/material/badge'
import {MatButtonModule} from '@angular/material/button';
import { CoreModule } from '../../core/core.module';
import {MatIconModule} from '@angular/material/icon';
import { HomeModuleRoutingModule } from './home-module-routing.module';
import { CarouselSlideComponent } from './components/carousel/carousel-slide.component';
import { CarouselModule, WavesModule  } from 'angular-bootstrap-md';
import { PrimeNgModule } from 'src/app/core/prime-ng.module';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselSlideComponent
  ],
  imports: [
    CommonModule,
    MatBadgeModule,
    MatButtonModule,
    CoreModule,
    MatIconModule,
    HomeModuleRoutingModule,
    CarouselModule, 
    WavesModule,
    PrimeNgModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModuleModule { }
