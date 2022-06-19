import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaAdminComponent } from './page/categoria-admin.component';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { CategoryDetailComponent } from './subviews/category-detail/category-detail.component';
import {DividerModule} from 'primeng/divider';
import {CardModule} from 'primeng/card';
import { CardSkeletonSubcategoriesComponent } from './components/card-skeleton-subcategories/card-skeleton-subcategories.component';


@NgModule({
  declarations: [
    CategoriaAdminComponent,
    CategoryDetailComponent,
    CardSkeletonSubcategoriesComponent,
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    TableModule,
    ToolbarModule,
    SharedModuleModule,
    DividerModule,
    CardModule,
  ]
})
export class CategoriaModule { }
