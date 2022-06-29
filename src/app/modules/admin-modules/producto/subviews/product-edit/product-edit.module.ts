import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductEditRoutingModule } from './product-edit-routing.module';
import { ProductEditComponent } from './page/product-edit.component';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { FormProductModule } from 'src/app/shared/form-product/form-product.module';


@NgModule({
  declarations: [
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    ProductEditRoutingModule,
    SharedModuleModule,
    FormProductModule
  ]
})
export class ProductEditModule { }
