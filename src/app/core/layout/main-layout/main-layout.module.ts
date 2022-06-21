import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutModule} from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ErrorPageComponent } from '../../components/error-page/error-page.component';
import { MainLayoutComponent } from './page/main-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { CoreModule } from '../../core.module';
import { MaterialUIModule } from '../../material-ui.module';
import { PrimeNgModule } from '../../prime-ng.module';

@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    MainLayoutComponent,
    ErrorPageComponent,
    FooterComponent,
    ExpansionPanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    MainLayoutRoutingModule,
    CoreModule,
    MaterialUIModule,
    PrimeNgModule,
    ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    MainLayoutComponent,
    ErrorPageComponent,
  ]
})
export class MainLayoutModule { }
