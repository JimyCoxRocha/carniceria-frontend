import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { TableComponent } from './components/table/table.component';
import { MaterialUIModule } from 'src/app/core/material-ui.module';
import { ProductoAdminComponent } from './page/producto-admin.component';
import { ProductDetailComponent } from './subviews/product-detail/product-detail.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    TableComponent,
    ProductoAdminComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MaterialUIModule,
    NgxSkeletonLoaderModule,
    CoreModule
  ]
})
export class ProductoModule { }
