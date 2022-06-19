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
  sortOptions: SelectItem[];
  menuItems: MenuItem[] = [];
  _categories : Category[] = [];
  
  idCategory : number;
  isLoading : boolean ;
  emptyMessage : string;

  constructor(
    private _router : ActivatedRoute, 
    private _productService : ProductsService,
    private _categoriesService : CategoriesService
  ) 
  { 
    this.isLoading = true;
    this.idCategory = 0;
    this.emptyMessage = "Sin registros";
    this.sortOptions = [
      {label: 'De mayor a menor', value: 'menor'},
      {label: 'De menor a mayor', value: 'mayor'}
    ];
  }

  ngOnInit(): void {
    this.getIdCategory();
    this.getAllCategories();
  }

  getIdCategory(){
    this._router.params.subscribe((param : any)=>{
      this.idCategory = param['id'];
      this.isLoading = true;

      this.getProductsByIdCategory(this.idCategory);
    })
  }

  getProductsByIdCategory(idCategory : number){
    this._productService.getProductsByIdCategory(idCategory).subscribe((response)=>{
      this._products = response;
      this.isLoading = false;
      console.log(this._products)
    })
  }

  getAllCategories(){
    this._categoriesService.categories()
    .pipe( finalize ( () => this.fillMenuCategories()))
    .subscribe((response : Category[]) =>{
      this._categories = response;
    })
  }

  fillMenuCategories(){
    let arrayAux : any = []

    this._categories.forEach((category : Category)=>{
      arrayAux.push(
        {
          label : category.titulo,
          items : this.handleCategories(category)
        }
      )
    })

    this.menuItems = arrayAux;
  }

  handleCategories( category : Category){
    let subcategories : any = [];

    category.subCategoria.forEach((subCategory : SubCategory)=>{
      subcategories.push({label : subCategory.titulo})
    })

    return subcategories;
  }

  onSortChange($event : any){
    if($event.value == "mayor"){
      this._products = this._products.sort(this.sortProductForPriceHight);
    }else if($event.value == "menor"){
      this._products = this._products.sort(this.sortProductForPriceLow);
    }
  }

  sortProductForPriceHight(x : any,y : any){
    if(x.precio < y.precio) return -1;
    if(x.precio > y.precio) return 1;
    return 0;
  }

  sortProductForPriceLow(x : any,y : any){
    if(x.precio > y.precio) return -1;
    if(x.precio < y.precio) return 1;
    return 0;
  }

 
}
