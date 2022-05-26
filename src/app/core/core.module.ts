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
    FormsModule,
    ReactiveFormsModule,
    MaterialUIModule
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
