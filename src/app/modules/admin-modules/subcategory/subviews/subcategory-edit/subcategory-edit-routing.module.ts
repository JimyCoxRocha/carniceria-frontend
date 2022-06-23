import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubcategoryEditComponent } from './page/subcategory-edit.component';

const routes: Routes = [
  {
    path: '',
    component: SubcategoryEditComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcategoryEditRoutingModule { }
