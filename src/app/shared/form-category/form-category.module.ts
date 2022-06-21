import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormCategoryComponent } from './page/form-category.component';
import { SharedModuleModule } from '../shared-module.module';
import {TabViewModule} from 'primeng/tabview';
import {CheckboxModule} from 'primeng/checkbox';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [
    FormCategoryComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    TabViewModule,
    CheckboxModule,
    ProgressSpinnerModule
  ],
  exports : [
    FormCategoryComponent
  ]
})
export class FormCategoryModule { }
