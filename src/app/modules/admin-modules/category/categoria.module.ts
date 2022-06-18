import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaAdminComponent } from './page/categoria-admin.component';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { CategoryDetailComponent } from './subviews/category-detail/category-detail.component';


@NgModule({
  declarations: [
    CategoriaAdminComponent,
    CategoryDetailComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    TableModule,
    ToolbarModule,
    SharedModuleModule,
  ]
})
export class CategoriaModule { }
