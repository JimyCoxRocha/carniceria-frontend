import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductMainDetailRoutingModule } from './product-main-detail-routing.module';
import { ProductMainDetailComponent } from './page/product-main-detail.component';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import {ImageModule} from 'primeng/image';
import {InputNumberModule} from 'primeng/inputnumber';
import {DividerModule} from 'primeng/divider';
import {CardModule} from 'primeng/card';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { SkeletonProductMainDetailComponent } from './components/skeleton-product-main-detail.component';
import {CarouselModule} from 'primeng/carousel';


@NgModule({
  declarations: [
    ProductMainDetailComponent,
    SkeletonProductMainDetailComponent
  ],
  imports: [
    CommonModule,
    ProductMainDetailRoutingModule,
    SharedModuleModule,
    ImageModule,
    InputNumberModule,
    DividerModule,
    CardModule,
    ScrollPanelModule,
    CarouselModule
  ]
})
export class ProductMainDetailModule { }
