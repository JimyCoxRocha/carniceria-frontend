import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategoryRoutingModule } from './subcategory-routing.module';
import { SubcategoryComponent } from './page/subcategory.component';
import { TableSubcategoryModule } from 'src/app/shared/table-subcategory/table-subcategory.module';

import { TableModule} from 'primeng/table';
import { ToolbarModule} from 'primeng/toolbar';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';

@NgModule({
  declarations: [
    SubcategoryComponent,
  ],
  imports: [
    CommonModule,
    SubcategoryRoutingModule,
    ToolbarModule,
    TableSubcategoryModule,
    TableModule,
    SharedModuleModule,
  ]
})
export class SubcategoryModule { }
