import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { MatButtonModule } from '@angular/material/button';
import { ProductCardComponent } from './components/product-card/product-card.component';
import {MatCardModule} from '@angular/material/card';
import { FixedImageComponent } from './components/fixed-image/fixed-image.component';
import { CarouselModule, WavesModule  } from 'angular-bootstrap-md';
import { CarouselSlideComponent } from './components/carousel/carousel-slide.component';
import { ModalComponent } from './components/modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    ImageCardComponent,
    ProductCardComponent,
    FixedImageComponent,
    CarouselSlideComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    CarouselModule, 
    WavesModule,
    MatDialogModule
  ],
  exports: [
    ImageCardComponent,
    ProductCardComponent,
    FixedImageComponent,
    CarouselSlideComponent
  ]
})
export class CoreModule { }
