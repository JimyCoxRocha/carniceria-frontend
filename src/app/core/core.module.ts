import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { MatButtonModule } from '@angular/material/button';
import { ProductCardComponent } from './components/product-card/product-card.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    ImageCardComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    ImageCardComponent,
    ProductCardComponent
  ]
})
export class CoreModule { }
