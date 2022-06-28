import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProductComponent } from './page/form-product.component';
import { SharedModuleModule } from '../shared-module.module';
import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';
import { ModalDetailProductComponent } from './components/modal-detail-product/modal-detail-product.component';
import { CardsDetailProductComponent } from './components/cards-detail-product/cards-detail-product.component';
import {DialogModule} from 'primeng/dialog';
import { LoadOverlayModule } from '../load-overlay/load-overlay.module';

@NgModule({
  declarations: [
    FormProductComponent,
    ModalDetailProductComponent,
    CardsDetailProductComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    InputNumberModule,
    DropdownModule,
    DialogModule,
    LoadOverlayModule
  ],
  exports : [
    FormProductComponent
  ]
})
export class FormProductModule { }
