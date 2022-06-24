import { Component, Input, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/core/interfaces';
import {ConfirmationService, MessageService} from 'primeng/api';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/core/services';

@Component({
  selector: 'app-table-subcategory',
  templateUrl: './table-subcategory.component.html',
  styleUrls: ['./table-subcategory.component.css']
})
export class TableSubcategoryComponent implements OnInit {

  @Input() isDelete : boolean = false;
  isLoading : boolean = true;
  subCategories : SubCategory[] = [];

  constructor(
    private _router : Router,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService,
    private categoriesService : CategoriesService,
  ) { }

  ngOnInit(): void {
    this.getAllSubCategories();
  }

  getAllSubCategories(){
    this.categoriesService.subCategories().subscribe((response : SubCategory[])=>{
      this.subCategories = response;
      this.isLoading = false;
    })
  }

  onRowSelect(event : any) {
    let idSubcategory = event.data.idSubcategoria;
    this._router.navigate([`admin/sub-categoria/administrar/detail-subcategory/${idSubcategory}`]);
  }

  showModalDeleteSubcategory(subCategory : SubCategory){
    this.confirmationService.confirm({
      header : "Confirmación",
      message: `¿Desea eliminar la siguiente subcategoría: "${subCategory.titulo}"?`,
      acceptLabel : "Confirmar",
      rejectLabel : "Cancelar",
      rejectButtonStyleClass : "p-button-danger"	,
      accept: () => {
          this.deleteSubcategory(subCategory.idSubcategoria);
      }
    });
  }

  deleteSubcategory(idSubcategoria : number){
    this.isLoading = true;
    this.categoriesService.deleteSubcategory(idSubcategoria).subscribe((response) =>{
      if(response.toastError){
        this.isLoading = false;
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Ha ocurrido un error, intente más tarde!'});
        return ;
      }

      this.getAllSubCategories();
      this.messageService.add({severity:'success', summary: 'Completado', detail: 'Subcategoría inactivada con éxito', life : 3000});
    })
  }

}
