import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubcategoryDeleteComponent } from './page/subcategory-delete.component';

const routes: Routes = [
  {
    path: '',
    component: SubcategoryDeleteComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcategoryDeleteRoutingModule { }
