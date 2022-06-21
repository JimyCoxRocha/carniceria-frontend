import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryCreateRoutingModule } from './category-create-routing.module';
import { CategoryCreateComponent } from './page/category-create.component';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import {TabViewModule} from 'primeng/tabview';
import {CheckboxModule} from 'primeng/checkbox';


@NgModule({
  declarations: [
    CategoryCreateComponent
  ],
  imports: [
    CommonModule,
    CategoryCreateRoutingModule,
    SharedModuleModule,
    TabViewModule,
    CheckboxModule
  ]
})
export class CategoryCreateModule { }
