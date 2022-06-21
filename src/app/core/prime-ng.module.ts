import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
import {MenuModule} from 'primeng/menu';
import {SplitterModule} from 'primeng/splitter';
import {CardModule} from 'primeng/card';
import {AvatarModule} from 'primeng/avatar';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    MenuModule,
    SplitterModule,
    CardModule,
    AvatarModule,
    InputTextModule,
    MenubarModule,
    MegaMenuModule
  ],
  exports: [
    SidebarModule,
    ButtonModule,
    ToolbarModule,
    SplitButtonModule,
    MenuModule,
    SplitterModule,
    CardModule,
    AvatarModule,
    InputTextModule,
    MenubarModule,
    MegaMenuModule
  ]
})
export class PrimeNgModule { }
