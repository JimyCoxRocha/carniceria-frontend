import { Component, OnInit } from '@angular/core';
import { Category, SimpleProductInSubCategory, SubCategory } from 'src/app/core/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { CategoriesService } from 'src/app/core/services';

@Component({
  selector: 'app-subcategory-edit',
  templateUrl: './subcategory-edit.component.html',
  styleUrls: ['./subcategory-edit.component.css']
})
export class SubcategoryEditComponent implements OnInit {

  subCategory : SubCategory = {} as SubCategory;
  selectedCategories : Category[] = [];
  products: SimpleProductInSubCategory[] = [];

  isLoadingDetail : boolean;
  isLoadingProducts : boolean;
  isExistPhoto : boolean = true;
  isEdit : boolean = true;
  labelButton : string = "Editar"

  idSubcategory : number ;

  constructor(
    private primengConfig: PrimeNGConfig,
    private _route : ActivatedRoute,
    private _categoryService : CategoriesService
  ) {
    this.idSubcategory = 0;
    this.isLoadingDetail = true;
    this.isLoadingProducts = true;
    this.getIdSubcategory();
   }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    
  }

  getProductsToSubCategory(idSubCategory: number){
    console.log("this.subCategory",idSubCategory);
    this._categoryService.getProductsStatusInSubcategory(idSubCategory).subscribe((response : SimpleProductInSubCategory[]) =>{
      console.log(response);
      this.products = response;
    })
  }

  getIdSubcategory(){
    console.log("Sub Categoria");
    this._route.params.subscribe((param : any) =>{
      this.idSubcategory = param['id'];

      this.getProductsToSubCategory(param['id']);
      this.getDetailSubcategory();
    })
  }

  getDetailSubcategory(){
    this._categoryService.getSubcategoryById(this.idSubcategory).subscribe((response : SubCategory) =>{
      this.isLoadingDetail = false;
      this.subCategory = response;
    })
  }

  get isLoading(){
    return this.isLoadingProducts && this.isLoadingDetail;
  }
}
