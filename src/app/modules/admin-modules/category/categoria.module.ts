import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaAdminComponent } from './page/categoria-admin.component';
import { CategoryDetailComponent } from './subviews/category-detail/category-detail.component';
import { CardSkeletonSubcategoriesComponent } from './components/card-skeleton-subcategories/card-skeleton-subcategories.component';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { TableCategoriesModule } from 'src/app/shared/table-categories/table-categories.module';

import { TableModule} from 'primeng/table';
import { ToolbarModule} from 'primeng/toolbar';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { DividerModule} from 'primeng/divider';
import { CardModule} from 'primeng/card';
import { ModalErrorPrimengModule } from 'src/app/shared/modal-error-primeng/modal-error-primeng.module';

@NgModule({
  declarations: [
    CategoriaAdminComponent,
    CategoryDetailComponent,
    CardSkeletonSubcategoriesComponent,
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    TableModule,
    ToolbarModule,
    SharedModuleModule,
    DividerModule,
    CardModule,
    TableCategoriesModule,
    ModalErrorPrimengModule
  ],
})
export class CategoriaModule { }
