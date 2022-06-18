import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './page/category.component';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import {RatingModule} from 'primeng/rating';
import {DataViewModule} from 'primeng/dataview';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModuleModule,
    RatingModule,
    DataViewModule,
    FormsModule
  ]
})
export class CategoryModule { }
