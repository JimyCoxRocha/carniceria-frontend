import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ImageCardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    ImageCardComponent
  ]
})
export class CoreModule { }
