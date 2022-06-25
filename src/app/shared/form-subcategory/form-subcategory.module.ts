import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSubcategoryComponent } from './page/form-subcategory.component';

import { SharedModuleModule } from '../shared-module.module';
import {CheckboxModule} from 'primeng/checkbox';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { LoadOverlayModule } from '../load-overlay/load-overlay.module';
import { FormOverlayModule } from '../form-overlay/form-overlay.module';

@NgModule({
  declarations: [
    FormSubcategoryComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    CheckboxModule,
    ProgressSpinnerModule,
    LoadOverlayModule,
    FormOverlayModule
  ],
  exports : [
    FormSubcategoryComponent
  ]
})
export class FormSubcategoryModule { }
