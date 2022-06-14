import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HomeModuleModule } from './modules/home/home-module.module';
import { HttpClientModule } from '@angular/common/http';
import { CarModule } from './modules/carStore/car.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomPaginatorComponent } from './core/components/custom-paginator/custom-paginator.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: CustomPaginatorComponent
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
