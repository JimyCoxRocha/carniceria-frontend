import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductMainDetailRoutingModule } from './product-main-detail-routing.module';
import { ProductMainDetailComponent } from './page/product-main-detail.component';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import {ImageModule} from 'primeng/image';
import {InputNumberModule} from 'primeng/inputnumber';
import {DividerModule} from 'primeng/divider';


@NgModule({
  declarations: [
    ProductMainDetailComponent
  ],
  imports: [
    CommonModule,
    ProductMainDetailRoutingModule,
    SharedModuleModule,
    ImageModule,
    InputNumberModule,
    DividerModule
  ]
})
export class ProductMainDetailModule { }
