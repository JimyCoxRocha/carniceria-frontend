import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './core/components/error-page/error-page.component';
import { AdminGuard } from './core/guards/admin.guard';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./core/layout/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule),
    canActivate: [ AdminGuard ],
    canLoad: [ AdminGuard ]
  },
  {
    path: '',
    loadChildren: () => import('./core/layout/main-layout/main-layout.module').then(m => m.MainLayoutModule),
    /* pathMatch: 'full' */
  },
  /* {
    path: 'admin',
    canLoad: [ AdminGuard ]
    //loadChildren: () => import('./core/layout/main-layout/main-layout.module').then(m => m.MainLayoutModule),
  }, */
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
