import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleComponent } from './page/sale.component';
import { ShipmentProductsComponent } from './subviews/shipment-products/shipment-products.component';

const routes: Routes = [
  {path : '', component : SaleComponent},
  { path:'**' , redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleRoutingModule { }
