import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubcategoryCreateComponent } from './page/subcategory-create.component';

const routes: Routes = [
  {
    path: '',
    component: SubcategoryCreateComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcategoryCreateRoutingModule { }
