import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoAdminComponent } from './page/producto-admin.component';
import { ProductDetailComponent } from './subviews/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: 'detail-product/:id',
    component: ProductDetailComponent
  },
  {
    path : 'create-product',
    loadChildren : () => import('../../../modules/admin-modules/producto/subviews/product-create/product-create.module')
                         .then(m => m.ProductCreateModule),
  },
  {
    path: 'edit-product/:id',
    loadChildren : () => import('../../../modules/admin-modules/producto/subviews/product-edit/product-edit.module')
                         .then(m => m.ProductEditModule),
  },
  {
    path: '',
    component: ProductoAdminComponent,
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
