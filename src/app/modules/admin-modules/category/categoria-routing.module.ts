import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaAdminComponent } from './page/categoria-admin.component';
import { CategoryDetailComponent } from './subviews/category-detail/category-detail.component';

const routes: Routes = [
  {
    path: 'detail-category/:id',
    component: CategoryDetailComponent
  },
  {
    path: 'edit-category/:id',
    loadChildren : () => import('../../../modules/admin-modules/category/subviews/category-edit/category-edit.module')
                         .then(m => m.CategoryEditModule),
  },
  {
    path : 'create-category',
    loadChildren : () => import('../../../modules/admin-modules/category/subviews/category-create/category-create.module')
                         .then(m => m.CategoryCreateModule),
  },
  {
    path: '',
    component: CategoriaAdminComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
