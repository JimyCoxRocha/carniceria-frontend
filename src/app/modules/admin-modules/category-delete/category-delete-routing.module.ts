import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDeleteComponent } from './page/category-delete.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryDeleteComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryDeleteRoutingModule { }
