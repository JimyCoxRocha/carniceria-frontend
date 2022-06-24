import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryEditComponent } from './page/category-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryEditComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryEditRoutingModule { }
