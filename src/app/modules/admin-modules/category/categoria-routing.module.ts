import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaAdminComponent } from './page/categoria-admin.component';

const routes: Routes = [
  // {
  //   path: ':id',
  //   component: ProductDetailComponent
  // },
  {
    path: '',
    component: CategoriaAdminComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
