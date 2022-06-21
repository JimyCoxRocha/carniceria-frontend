import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryDeleteRoutingModule } from './category-delete-routing.module';
import { CategoryDeleteComponent } from './page/category-delete.component';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { TableModule} from 'primeng/table';
import { ToolbarModule} from 'primeng/toolbar';
import { DividerModule} from 'primeng/divider';
import { CardModule} from 'primeng/card';
import { TableCategoriesModule } from 'src/app/shared/table-categories/table-categories.module';



@NgModule({
  declarations: [
    CategoryDeleteComponent,
  ],
  imports: [
    CommonModule,
    CategoryDeleteRoutingModule,
    SharedModuleModule,
    TableCategoriesModule,
    TableModule,
    ToolbarModule,
    SharedModuleModule,
    DividerModule,
    CardModule,
  ]
})
export class CategoryDeleteModule { }
