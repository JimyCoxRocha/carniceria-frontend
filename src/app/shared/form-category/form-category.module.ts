import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormCategoryComponent } from './page/form-category.component';
import { SharedModuleModule } from '../shared-module.module';
import {TabViewModule} from 'primeng/tabview';
import {CheckboxModule} from 'primeng/checkbox';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { LoadOverlayModule } from '../load-overlay/load-overlay.module';
import { FormOverlayModule } from '../form-overlay/form-overlay.module';

@NgModule({
  declarations: [
    FormCategoryComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    TabViewModule,
    CheckboxModule,
    ProgressSpinnerModule,
    LoadOverlayModule,
    FormOverlayModule
  ],
  exports : [
    FormCategoryComponent
  ]
})
export class FormCategoryModule { }
