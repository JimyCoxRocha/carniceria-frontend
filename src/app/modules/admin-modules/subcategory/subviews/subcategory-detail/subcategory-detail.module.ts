import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategoryDetailRoutingModule } from './subcategory-detail-routing.module';
import { SubcategoryDetailComponent } from './page/subcategory-detail.component';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { DividerModule} from 'primeng/divider';
import { CardModule} from 'primeng/card';
import { CardSkeletonCategoriesComponent } from './components/card-skeleton-categories/card-skeleton-categories.component';
import { ModalErrorPrimengModule } from 'src/app/shared/modal-error-primeng/modal-error-primeng.module';
import { FormOverlayModule } from 'src/app/shared/form-overlay/form-overlay.module';

@NgModule({
  declarations: [
    SubcategoryDetailComponent,
    CardSkeletonCategoriesComponent
  ],
  imports: [
    CommonModule,
    SubcategoryDetailRoutingModule,
    SharedModuleModule,
    DividerModule,
    CardModule,
    ModalErrorPrimengModule,
    FormOverlayModule
  ]
})
export class SubcategoryDetailModule { }
