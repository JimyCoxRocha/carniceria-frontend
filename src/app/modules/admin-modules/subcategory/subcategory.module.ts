import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategoryRoutingModule } from './subcategory-routing.module';
import { SubcategoryComponent } from './page/subcategory.component';


@NgModule({
  declarations: [
    SubcategoryComponent
  ],
  imports: [
    CommonModule,
    SubcategoryRoutingModule
  ]
})
export class SubcategoryModule { }
