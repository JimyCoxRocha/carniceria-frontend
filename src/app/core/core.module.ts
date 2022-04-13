import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { MatButtonModule } from '@angular/material/button';
import { ProductCardComponent } from './components/product-card/product-card.component';
import {MatCardModule} from '@angular/material/card';
import { FixedImageComponent } from './components/fixed-image/fixed-image.component';

@NgModule({
  declarations: [
    ImageCardComponent,
    ProductCardComponent,
    FixedImageComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    ImageCardComponent,
    ProductCardComponent,
    FixedImageComponent
  ]
})
export class CoreModule { }
