import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { MainLayoutComponent } from './page/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('../../../modules/auth/auth.module')
                            .then(m => m.AuthModule),
        canLoad: [ AuthGuard ],
        canActivate: [ AuthGuard ]
      },
      {
        path: 'carrito',
        loadChildren: () => import('../../../modules/carStore/car.module')
                            .then(m => m.CarModule)
      },
      {
        path: 'categoria',
        loadChildren: () => import('../../../modules/category/category.module')
                            .then(m => m.CategoryModule)
      },
      {
        path: '',
        loadChildren: () => import('../../../modules/home/home-module.module')
                            .then(m => m.HomeModuleModule)
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
