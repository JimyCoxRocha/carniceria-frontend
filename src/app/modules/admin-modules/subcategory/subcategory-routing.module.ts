import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubcategoryComponent } from './page/subcategory.component';
import { SubcategoryDetailComponent } from './subviews/subcategory-detail/page/subcategory-detail.component';

const routes: Routes = [
  {
    path: 'detail-subcategory/:id',
    loadChildren : () => import('../../../modules/admin-modules/subcategory/subviews/subcategory-detail/subcategory-detail.module')
                         .then(m => m.SubcategoryDetailModule),
  },
  {
    path: 'edit-subcategory/:id',
    loadChildren : () => import('../../../modules/admin-modules/subcategory/subviews/subcategory-edit/subcategory-edit.module')
                         .then(m => m.SubcategoryEditModule),
  },
  {
    path : 'create-subcategory',
    loadChildren : () => import('../../../modules/admin-modules/subcategory/subviews/subcategory-create/subcategory-create.module')
                         .then(m => m.SubcategoryCreateModule),
  },
  {
    path: '',
    component: SubcategoryComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcategoryRoutingModule { }
