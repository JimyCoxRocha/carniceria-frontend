import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { TableComponent } from './components/table/table.component';
import { MaterialUIModule } from 'src/app/core/material-ui.module';
import { ProductoAdminComponent } from './page/producto-admin.component';


@NgModule({
  declarations: [
    TableComponent,
    ProductoAdminComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MaterialUIModule
  ]
})
export class ProductoModule { }
