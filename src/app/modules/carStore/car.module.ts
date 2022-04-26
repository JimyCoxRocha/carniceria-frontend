import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { CarRoutingModule } from './car-routing.module';
import { CarStoreComponent } from './page/car-store.component';
import { CoreModule } from '../../core/core.module';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [
    CarStoreComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    CoreModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    CarStoreComponent
  ]
})
export class CarModule { }
