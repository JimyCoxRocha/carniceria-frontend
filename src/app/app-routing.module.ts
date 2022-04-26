import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './core/components/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/layout/main-layout/main-layout.module').then(m => m.MainLayoutModule),
    /* pathMatch: 'full' */
  },
  {
    path: '**',
    component: ErrorPageComponent,
    outlet: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
