import { Injectable } from '@angular/core';
import { AppConstants } from '../constants';
import { Product, ProductoResponse } from '../interfaces';
import { StorageService, HttpProcessService } from '.';

export interface IProductsCar {
  id: number, 
  amount: number
}

export interface IProductCarStore extends Product {
  amount: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  _products: ProductoResponse[] = [];
  _isLoading: boolean = false;
  _productsCar: IProductsCar[] = [];
  _productsInCar: IProductCarStore[] = [];
  
  constructor(
    private storage: StorageService,
    private http: HttpProcessService
  ) { }

  getProductInCar(){
    if (this._products.length > 0) return;

    this.http.requestProducts<ProductoResponse[]>("Producto")
      .subscribe(product => {

        this.getProductStorage().forEach(x => {
          product.forEach(y => {
            (x.id = y.product.idProducto)
            && this._productsInCar.push({...(y.product), amount: x.amount});
          })
        })
    });
      
  }

  getProductStorage(){
    return JSON.parse(this.storage.getLocalStorage(AppConstants.LocalStorage.product_list) || '[]') as IProductsCar[];
  }

  setProductStorage( { id, amount }: IProductsCar ){
    const products = this.getProductStorage();

    const index = products.findIndex(x => x.id == id);
    (index >= 0) 
    ? (products[index].amount = amount)
    : products.push({id, amount});

    this._productsCar = products;
    this.storage.setStorage(
      {element: products,keyStorage: AppConstants.LocalStorage.product_list}
    );
  }

  removeProductStorage( idProducto: number ){
    const products = this.getProductStorage();
    this._productsCar = products.filter(product => product.id != idProducto);
    this.storage.setStorage(
      {
        element: this._productsCar,
        keyStorage: AppConstants.LocalStorage.product_list
      }
    );
  }

  removeAllProductStorage( ){
    this._productsCar = [];
    this.storage.setStorage(
      {
        element: [],
        keyStorage: AppConstants.LocalStorage.product_list
      }
    );
  }

  findProductStorage(idProduct: number){
    return this.getProductStorage().find(x => x.id == idProduct);
  }


  getProducts(){
    if(this._isLoading || this._products.length > 0) return;
    this._isLoading = true;
    
    this.http.requestProducts<ProductoResponse[]>("Producto")
    .subscribe(x => {
      this._products = x;
      this._isLoading = false;
    })
  }

  
}
