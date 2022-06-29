import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomPaginatorComponent } from './core/components/custom-paginator/custom-paginator.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AuthInterceptorService } from './core/interceptor/auth-interceptor.service';

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
      useClass: CustomPaginatorComponent,
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptorService,
      multi : true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
