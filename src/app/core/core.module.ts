import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { MatButtonModule } from '@angular/material/button';
import { ProductCardComponent } from './components/product-card/product-card.component';
import {MatCardModule} from '@angular/material/card';
import { FixedImageComponent } from './components/fixed-image/fixed-image.component';
import { ModalComponent } from './components/modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import {MatIconModule} from '@angular/material/icon';
import { CounterComponent } from './components/counter/counter.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ImageCardComponent,
    ProductCardComponent,
    FixedImageComponent,
    ModalComponent,
    NavLinkComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ImageCardComponent,
    ProductCardComponent,
    FixedImageComponent,
    NavLinkComponent,
    CounterComponent
  ]
})
export class CoreModule { }
