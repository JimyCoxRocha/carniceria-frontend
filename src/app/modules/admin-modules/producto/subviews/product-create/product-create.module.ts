import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCreateRoutingModule } from './product-create-routing.module';
import { ProductCreateComponent } from './page/product-create.component';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { FormProductModule } from 'src/app/shared/form-product/form-product.module';


@NgModule({
  declarations: [
    ProductCreateComponent
  ],
  imports: [
    CommonModule,
    ProductCreateRoutingModule,
    SharedModuleModule,
    FormProductModule
  ]
})
export class ProductCreateModule { }
