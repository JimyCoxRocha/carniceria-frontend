import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableCategoriesComponent } from './page/table-categories.component';
import { TableModule} from 'primeng/table';
import { ToolbarModule} from 'primeng/toolbar';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { DividerModule} from 'primeng/divider';
import { CardModule} from 'primeng/card';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    TableCategoriesComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ToolbarModule,
    SharedModuleModule,
    DividerModule,
    CardModule,
    ConfirmDialogModule,
  ],
  exports : [
    TableCategoriesComponent
  ]
})
export class TableCategoriesModule { }
