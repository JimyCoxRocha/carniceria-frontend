import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryEditRoutingModule } from './category-edit-routing.module';
import { CategoryEditComponent } from './page/category-edit.component';
import { FormCategoryModule } from 'src/app/shared/form-category/form-category.module';

@NgModule({
  declarations: [
    CategoryEditComponent
  ],
  imports: [
    CommonModule,
    CategoryEditRoutingModule,
    FormCategoryModule
  ]
})
export class CategoryEditModule { }
