import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/core/interfaces';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';


@Component({
  selector: 'app-table-categories',
  templateUrl: './table-categories.component.html',
  styleUrls: ['./table-categories.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class TableCategoriesComponent implements OnInit {

  @Input() categories : Category[] = [] ;
  @Input() isDelete : boolean = false;
  @Input() isLoading : boolean = false;

  constructor(
    private _router : Router,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService
  ) { 
    this.isLoading = true;
  }

  ngOnInit(): void {
  }

  onRowSelect(event : any) {
    let idCategoria = event.data.idCategoria;
    this._router.navigate([`admin/administrar/${idCategoria}`]);
  }

  showModalDeleteCategory(){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
          //Actual logic to perform a confirmation
      }
  });
  }
}
