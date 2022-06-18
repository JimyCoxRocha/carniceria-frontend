import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { ProductoResponse } from 'src/app/core/interfaces';
import { ProductsService } from 'src/app/core/services';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  _products: ProductoResponse[] = [];
  sortOptions: SelectItem[];
  
  idCategory : number;
  isLoading : boolean ;
  emptyMessage : string;

  constructor(
    private _router : ActivatedRoute, 
    private _productService : ProductsService,
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
    })
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
