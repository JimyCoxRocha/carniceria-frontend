import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSubcategoryComponent } from './page/form-subcategory.component';

import { SharedModuleModule } from '../shared-module.module';
import {CheckboxModule} from 'primeng/checkbox';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [
    FormSubcategoryComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    CheckboxModule,
    ProgressSpinnerModule
  ],
  exports : [
    FormSubcategoryComponent
  ]
})
export class FormSubcategoryModule { }
