import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategoryDeleteRoutingModule } from './subcategory-delete-routing.module';
import { SubcategoryDeleteComponent } from './page/subcategory-delete.component';
import { TableSubcategoryModule } from 'src/app/shared/table-subcategory/table-subcategory.module';


@NgModule({
  declarations: [
    SubcategoryDeleteComponent
  ],
  imports: [
    CommonModule,
    SubcategoryDeleteRoutingModule,
    TableSubcategoryModule
  ]
})
export class SubcategoryDeleteModule { }
