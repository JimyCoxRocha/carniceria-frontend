import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormOverlayComponent } from './page/form-overlay.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


@NgModule({
  declarations: [
    FormOverlayComponent
  ],
  imports: [
    CommonModule,
    ProgressSpinnerModule
  ],
  exports : [
    FormOverlayComponent
  ]
})
export class FormOverlayModule { }
