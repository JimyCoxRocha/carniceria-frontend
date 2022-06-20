import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './page/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'administrar',
        loadChildren: () => import('../../../modules/admin-modules/category/categoria.module')
                            .then(m => m.CategoriaModule)
      },
      {
        path: 'eliminar',
        loadChildren: () => import('../../../modules/admin-modules/category-delete/category-delete.module')
                            .then(m => m.CategoryDeleteModule)
      },
      {
        path: 'productos',
        loadChildren: () => import('../../../modules/admin-modules/producto/producto.module')
                            .then(m => m.ProductoModule)
      },
      {
        path: '',
        loadChildren: () => import('../../../modules/admin-modules/home/home.module')
                            .then(m => m.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
