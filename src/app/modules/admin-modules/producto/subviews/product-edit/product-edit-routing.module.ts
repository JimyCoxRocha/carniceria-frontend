import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductEditComponent } from './page/product-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProductEditComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductEditRoutingModule { }
