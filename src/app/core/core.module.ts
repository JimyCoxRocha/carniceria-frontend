import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FixedImageComponent } from './components/fixed-image/fixed-image.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { CounterComponent } from './components/counter/counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialUIModule } from './material-ui.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CardSkeletonComponent } from './components/card-skeleton/card-skeleton.component';

@NgModule({
  declarations: [
    ImageCardComponent,
    ProductCardComponent,
    FixedImageComponent,
    ModalComponent,
    NavLinkComponent,
    CounterComponent,
    CardSkeletonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialUIModule,
    NgxSkeletonLoaderModule
  ],
  exports: [
    ImageCardComponent,
    ProductCardComponent,
    FixedImageComponent,
    NavLinkComponent,
    CounterComponent,
    CardSkeletonComponent
  ]
})
export class CoreModule { }
