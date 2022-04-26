import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarStoreComponent } from './page/car-store.component';

const routes: Routes = [
  {
    path: '',
    component: CarStoreComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
