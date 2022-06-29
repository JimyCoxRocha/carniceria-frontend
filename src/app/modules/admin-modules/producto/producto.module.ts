
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { TableComponent } from './components/table/table.component';
import { ProductoAdminComponent } from './page/producto-admin.component';
import { ProductDetailComponent } from './subviews/product-detail/product-detail.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { TableModule} from 'primeng/table';
import { ToolbarModule} from 'primeng/toolbar';;
import { DividerModule} from 'primeng/divider';
import { CardModule} from 'primeng/card';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {TooltipModule} from 'primeng/tooltip';
import {TabViewModule} from 'primeng/tabview';
import { BodyProductDetailComponent } from './components/body-product-detail/body-product-detail.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DialogModule} from 'primeng/dialog';
import {InputNumberModule} from 'primeng/inputnumber';


@NgModule({
  declarations: [
    TableComponent,
    ProductoAdminComponent,
    ProductDetailComponent,
    BodyProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    CoreModule,
    SharedModuleModule,
    TableModule,
    ToolbarModule,
    DividerModule,
    ConfirmDialogModule,
    CardModule,
    TooltipModule,
    TabViewModule,
    ScrollPanelModule,
    RadioButtonModule,
    DialogModule,
    InputNumberModule,
  ]
})
export class ProductoModule { }



