import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductMainDetailComponent } from './page/product-main-detail.component';

const routes: Routes = [
  {path : ':id', component : ProductMainDetailComponent},
  { path:'**' , redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductMainDetailRoutingModule { }
