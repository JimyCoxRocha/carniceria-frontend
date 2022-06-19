import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RippleModule} from 'primeng/ripple';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';
import {SkeletonModule} from 'primeng/skeleton';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RippleModule,
    ButtonModule
  ],
  exports : [
    RippleModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    ToastModule,
    SkeletonModule
  ]
})
export class SharedModuleModule { }
