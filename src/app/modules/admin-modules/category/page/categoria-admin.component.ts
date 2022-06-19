import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService  } from 'primeng/api';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/interfaces';
import { CategoriesService } from 'src/app/core/services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categoria-admin',
  templateUrl: './categoria-admin.component.html',
  styleUrls: ['./categoria-admin.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class CategoriaAdminComponent implements OnInit {

  categories : Category[] = [] ;
  isLoading : boolean;
  url : string ;

  constructor(
    private messageService: MessageService, 
    private confirmationService: ConfirmationService,
    private categoryService : CategoriesService,
    private _router : Router
    ) {
      this.isLoading = true;
      this.url = environment.API_URL;
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

  onRowSelect(event : any) {
    let idCategoria = event.data.idCategoria;
    this._router.navigate([`admin/administrar/${idCategoria}`]);
  }
}
