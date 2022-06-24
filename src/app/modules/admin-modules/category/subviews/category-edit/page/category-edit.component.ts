import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Category, SubCategory } from 'src/app/core/interfaces';
import { CategoriesService } from 'src/app/core/services';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  isLoading : boolean;
  category : Category = {} as Category;
  idCategory : number ;
  selectedSubCategories : SubCategory[] = [];
  isExistPhoto : boolean = true;
  isEdit : boolean = true;
  labelButton : string = "Editar"

  constructor(
    private primengConfig: PrimeNGConfig,
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
      this.category = response;
      this.selectedSubCategories = this.category.subCategoria;
    })
  }

}
