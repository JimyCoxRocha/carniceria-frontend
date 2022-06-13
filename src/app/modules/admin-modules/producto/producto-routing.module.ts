import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoAdminComponent } from './page/producto-admin.component';
import { ProductDetailComponent } from './subviews/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: ':id',
    component: ProductDetailComponent
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
