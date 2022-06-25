import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Category } from 'src/app/core/interfaces';
import { CategoriesService } from 'src/app/core/services';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  isLoading : boolean;
  category : Category = {} as Category;
  idCategory : number ;
  displayModal : boolean = false;
  lengthSubcategory : number = 0;
  urlImage : string = "../../../../../../assets/images/not-info.png";

  constructor(
    private primengConfig: PrimeNGConfig,
    private _router : Router,
    private _route : ActivatedRoute,
    private _categoryService : CategoriesService
  ) { 
    this.isLoading = true;
    this.idCategory = 0;
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getIdCategory();
  }

  getIdCategory(){
    this._route.params.subscribe((param : any) =>{
      this.idCategory = param['id'];

      this.getDetailCategory();
    })
  }

  
  getDetailCategory(){
    this._categoryService.getCategoryById(this.idCategory).subscribe((response : Category) =>{
      this.isOpenModal(response);
      this.category = response;
      this.lengthSubcategory = this.category.subCategoria.length;
    })
  }
  
  isOpenModal( response : any){
    if(response.openModal){
      this.displayModal = true;
      this.isLoading = true;
      return ;
    }

    this.isLoading = false;
    this.displayModal = false;
  }

  buttonBack(){
    this._router.navigate(['admin/categoria/administrar']);
  }

  redirectEditPage(){
    this._router.navigate([`admin/categoria/administrar/edit-category/${this.category.idCategoria}`])
  }
}
