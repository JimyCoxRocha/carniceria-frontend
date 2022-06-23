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

  showModalDeleteSubcategory(){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
          //Actual logic to perform a confirmation
      }
  });
  }
}
