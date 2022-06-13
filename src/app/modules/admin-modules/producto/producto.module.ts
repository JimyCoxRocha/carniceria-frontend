import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { TableComponent } from './components/table/table.component';
import { MaterialUIModule } from 'src/app/core/material-ui.module';
import { ProductoAdminComponent } from './page/producto-admin.component';
import { ProductDetailComponent } from './subviews/product-detail/product-detail.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';

@NgModule({
  declarations: [
    TableComponent,
    ProductoAdminComponent,
    ProductDetailComponent,
    ExpansionPanelComponent,
    TabsComponent,
    CardDetailComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MaterialUIModule
  ]
})
export class ProductoModule { }
