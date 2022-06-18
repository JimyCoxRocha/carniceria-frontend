import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RippleModule} from 'primeng/ripple';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';

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
    DropdownModule
  ]
})
export class SharedModuleModule { }
