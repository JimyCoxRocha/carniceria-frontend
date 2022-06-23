import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/core/interfaces';
import {ConfirmationService, ConfirmEventType, MessageService} from 'primeng/api';
import { CategoriesService } from 'src/app/core/services';


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

  @Output() deleteCategoryOutput = new EventEmitter<any>();
  @Output() changeLoading = new EventEmitter<any>();

  constructor(
    private _router : Router,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService,
    private categoryService : CategoriesService
  ) { 
    this.isLoading = true;
  }

  ngOnInit(): void {
  }

  onRowSelect(event : any) {
    let idCategoria = event.data.idCategoria;
    this._router.navigate([`admin/categoria/administrar/detail-category/${idCategoria}`]);
  }

  showModalDeleteCategory(category : Category){
    this.confirmationService.confirm({
      header : "Confirmación",
      message: `¿Desea eliminar la siguiente categoría: "${category.titulo}"?`,
      acceptLabel : "Confirmar",
      rejectLabel : "Cancelar",
      rejectButtonStyleClass : "p-button-danger"	,
      accept: () => {
          this.deleteCategory(category.idCategoria);
      }
    });
  }

  deleteCategory(idCategory : number){
    this.reloadTable();
    this.categoryService.deleteCategory(idCategory).subscribe((response) =>{
      if(response.data == "Proceso Ejecutado Correctamente"){
        this.messageService.add({severity:'success', summary: 'Completado', detail: 'Categoría inactivada con éxito', life : 3000});
        this.deleteCategoryOutput.emit();
      }else{
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Error'});
        this.deleteCategoryOutput.emit();
      }
    })
  }

  reloadTable(){
    this.changeLoading.emit();
  }
}
