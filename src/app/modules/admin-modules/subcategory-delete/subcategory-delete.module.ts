import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategoryDeleteRoutingModule } from './subcategory-delete-routing.module';
import { SubcategoryDeleteComponent } from './page/subcategory-delete.component';


@NgModule({
  declarations: [
    SubcategoryDeleteComponent
  ],
  imports: [
    CommonModule,
    SubcategoryDeleteRoutingModule
  ]
})
export class SubcategoryDeleteModule { }
