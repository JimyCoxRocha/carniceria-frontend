import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService  } from 'primeng/api';
import { Category } from 'src/app/core/interfaces';
import { CategoriesService } from 'src/app/core/services';

@Component({
  selector: 'app-categoria-admin',
  templateUrl: './categoria-admin.component.html',
  styleUrls: ['./categoria-admin.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class CategoriaAdminComponent implements OnInit {

  categories : Category[] = [] ;
  isLoading : boolean;
  isDelete : boolean;

  constructor(
    private categoryService : CategoriesService,
    ) {
      this.isLoading = true;
      this.isDelete = false;
    }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
    return this.categoryService.categoriesAdmin().subscribe((response) => {
      this.categories = response;
      this.isLoading = false;
      console.log(this.categories);
    })
  }

}
