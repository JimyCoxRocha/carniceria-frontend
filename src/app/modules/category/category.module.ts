import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './page/category.component';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import {RatingModule} from 'primeng/rating';
import {DataViewModule} from 'primeng/dataview';
import { FormsModule } from '@angular/forms';
import {PanelMenuModule} from 'primeng/panelmenu';
import {CardModule} from 'primeng/card';
import { TableProductsComponent } from './components/table-products/table-products.component';
import { OverlayCardCategoriesComponent } from './components/overlay-card-categories/overlay-card-categories.component';
import {DialogModule} from 'primeng/dialog';
import { ModalErrorPrimengModule } from 'src/app/shared/modal-error-primeng/modal-error-primeng.module';
import { PrimeNgModule } from 'src/app/core/prime-ng.module';


@NgModule({
  declarations: [
    CategoryComponent,
    TableProductsComponent,
    OverlayCardCategoriesComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModuleModule,
    RatingModule,
    DataViewModule,
    FormsModule,
    PanelMenuModule,
    CardModule,
    DialogModule,
    ModalErrorPrimengModule,
    PrimeNgModule
  ]
})
export class CategoryModule { }
