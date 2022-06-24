import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalErrorPrimengComponent } from './page/modal-error-primeng.component';
import {DialogModule} from 'primeng/dialog';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModalErrorPrimengComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    FormsModule,
  ],
  exports : [
    ModalErrorPrimengComponent
  ]
})
export class ModalErrorPrimengModule { }
