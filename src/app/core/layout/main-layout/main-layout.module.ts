import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import {LayoutModule} from '@angular/cdk/layout';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ErrorPageComponent } from '../../components/error-page/error-page.component';
import { MainLayoutComponent } from './page/main-layout.component';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { CoreModule } from '../../core.module';
import {MatChipsModule} from '@angular/material/chips';

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
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MainLayoutRoutingModule,
    MatExpansionModule,
    CoreModule,
    MatChipsModule
    ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    MainLayoutComponent,
    ErrorPageComponent
  ]
})
export class MainLayoutModule { }
