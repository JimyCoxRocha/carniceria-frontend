import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import { SaleComponent } from './page/sale.component';
import { PrimeNgModule } from '../../core/prime-ng.module';
import { AlternativesComponent } from './subviews/alternatives/alternatives.component';
import { ShipmentProductsComponent } from './subviews/shipment-products/shipment-products.component';


@NgModule({
  declarations: [
    SaleComponent,
    AlternativesComponent,
    ShipmentProductsComponent
  ],
  imports: [
    CommonModule,
    SaleRoutingModule,
    PrimeNgModule
  ]
})
export class SaleModule { }
