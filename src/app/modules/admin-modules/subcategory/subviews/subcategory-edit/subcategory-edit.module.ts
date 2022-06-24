import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategoryEditRoutingModule } from './subcategory-edit-routing.module';
import { SubcategoryEditComponent } from './page/subcategory-edit.component';
import { FormSubcategoryModule } from 'src/app/shared/form-subcategory/form-subcategory.module';


@NgModule({
  declarations: [
    SubcategoryEditComponent
  ],
  imports: [
    CommonModule,
    SubcategoryEditRoutingModule,
    FormSubcategoryModule
  ]
})
export class SubcategoryEditModule { }
