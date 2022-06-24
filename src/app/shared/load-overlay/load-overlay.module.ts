import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadOverlayComponent } from './page/load-overlay.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { SharedModuleModule } from '../shared-module.module';



@NgModule({
  declarations: [
    LoadOverlayComponent
  ],
  imports: [
    CommonModule,
    ProgressSpinnerModule,
    SharedModuleModule
  ],
  exports : [
    LoadOverlayComponent
  ]
})
export class LoadOverlayModule { }
