import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectItem, MenuItem } from 'primeng/api';
import { Category, ProductoResponse, SubCategory } from 'src/app/core/interfaces';
import { CategoriesService, ProductsService } from 'src/app/core/services';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  _products: ProductoResponse[] = [];
  menuItems: MenuItem[] = [];
  _categories : Category[] = [];
  
  idCategory : number;
  idSubcategory : number;
  isLoading : boolean ;
  isLoadingCategoriesOverlay : boolean;
  isOpenModalError : boolean;

  constructor(
    private _router : ActivatedRoute, 
    private _productService : ProductsService,
    private _categoriesService : CategoriesService
  ) 
  { 
    this.isLoading = true;
    this.isLoadingCategoriesOverlay = true;
    this.idCategory = 0;
    this.idSubcategory = 0;
    this.isOpenModalError = false;
  }

  ngOnInit(): void {
    this.getIdCategory();
    this.getAllCategories();
  }

  getIdCategory(){
    this._router.params.subscribe((param : any)=>{
      this.idCategory = param['idCategory'];
      this.idSubcategory = param['idSubcategory']
      this.isLoading = true;

      if(param['idCategory'] && param['idSubcategory']){
        this.getProductsByIdCategoryAndSubCategory(this.idCategory, this.idSubcategory);
      }else{
        this.getProductsByIdCategory(this.idCategory);
      }
    })
  }

  getProductsByIdCategory(idCategory : number){
    this._productService.getProductsByIdCategory(idCategory).subscribe((response)=>{
      this.isOpenModal(response);
      this._products = response;
    })
  }

  getProductsByIdCategoryAndSubCategory(idCategory : number, idSubcategory : number){
    this._productService.getProductsByIdCategoryAndSubCategory(idCategory, idSubcategory).subscribe((response)=>{
      this.isOpenModal(response);
      this._products = response;
      
    })
  }

  isOpenModal(response : any){
    if(response.openModal){
      this.isOpenModalError = true;
      this.isLoading = true;
      return;
    } 

    this.isLoading = false;
    this.isOpenModalError = false;
  }

  getAllCategories(){
    this._categoriesService.categories()
    .pipe( finalize ( () => this.fillMenuCategories()))
    .subscribe((response : Category[]) =>{
      this._categories = response;
      this.isLoadingCategories();
    })
  }

  isLoadingCategories(){
    if(this.isOpenModalError){
      this.isLoadingCategoriesOverlay = true;
      return;
    }

    this.isLoadingCategoriesOverlay = false;
  }

  fillMenuCategories(){
    let arrayAux : any = []
    this._categories.forEach((category : Category)=>{
      arrayAux.push({ label : category.titulo, items : this.handleCategories(category)});
    })

    this.menuItems = arrayAux;
  }

  handleCategories( category : Category){
    let subcategories : any = [];
    category.subCategoria.forEach((subCategory : SubCategory)=>{
      subcategories.push({label : subCategory.titulo, routerLink: [`/categoria/${category.idCategoria}/${subCategory.idSubcategoria}`]})
    })

    return subcategories;
  }

}
