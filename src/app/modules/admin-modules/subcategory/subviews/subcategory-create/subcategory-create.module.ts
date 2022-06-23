import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategoryCreateRoutingModule } from './subcategory-create-routing.module';
import { SubcategoryCreateComponent } from './page/subcategory-create.component';
import { FormSubcategoryModule } from 'src/app/shared/form-subcategory/form-subcategory.module';


@NgModule({
  declarations: [
    SubcategoryCreateComponent
  ],
  imports: [
    CommonModule,
    SubcategoryCreateRoutingModule,
    FormSubcategoryModule
  ]
})
export class SubcategoryCreateModule { }
