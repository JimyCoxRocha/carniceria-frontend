import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import { SaleComponent } from './page/sale.component';
import { PrimeNgModule } from '../../core/prime-ng.module';
import { AlternativesComponent } from './subviews/alternatives/alternatives.component';
import { ShipmentProductsComponent } from './subviews/shipment-products/shipment-products.component';
import {KeyFilterModule} from 'primeng/keyfilter';
import { CoreModule } from '../../core/core.module';
import { SummaryComponent } from './components/summary/summary.component';
import { PaymentComponent } from './subviews/payment/payment.component';

@NgModule({
  declarations: [
    SaleComponent,
    AlternativesComponent,
    ShipmentProductsComponent,
    SummaryComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    SaleRoutingModule,
    PrimeNgModule,
    KeyFilterModule,
    CoreModule
  ]
})
export class SaleModule { }
