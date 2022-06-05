import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './page/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
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
