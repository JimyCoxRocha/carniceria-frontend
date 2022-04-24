import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppConstants } from '../AppConstants';
import { ApiResponse, ErrorApiResponse } from '../interfaces/api-response/ApiResponse';
import { ProductoResponseEntity } from '../interfaces/common/ProductEntity';
import { CoreService } from './core.service';
import { StorageService } from './storage.service';

export interface IProductsCar {
  id: number, 
  amount: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  _products: ProductoResponseEntity[] = [];
  _isLoading: boolean = false;
  
  apiUrl = environment.API_URL;
  
  constructor(
    private http: HttpClient,
    private core: CoreService,
    private storage: StorageService
  ) { }

  setProductStorage( { id, amount }: IProductsCar ){
    const products = JSON.parse(this.storage.getLocalStorage(AppConstants.LocalStorage.product_list) || '[]') as IProductsCar[];

    const index = products.findIndex(x => x.id == id);
    (index >= 0) 
    ? (products[index].amount = amount)
    : products.push({id, amount});

    this.storage.setStorage(
      {element: products,keyStorage: AppConstants.LocalStorage.product_list}
    );
  }

  getProductStorage(){
    return JSON.parse(this.storage.getLocalStorage(AppConstants.LocalStorage.product_list) || '[]') as IProductsCar[];
  }

  /* rmProductStorage( idProducto: number, prodList: Productos[] ){
    const listStorage = JSON.parse(this.storage.getLocalStorage(LocalStorage.product_list) || '[]') as number[];
    const index = listStorage.indexOf(idProducto);
    listStorage.splice(index, 1);
    this.storage.setProduct(listStorage);
    prodList.forEach( m => {
      if (m.id_producto == idProducto)
        m.isSelected = false
    })
  }

  rmAllProductStorage(  ){
    const reset: number[] = [];
    this.storage.setProduct(reset)
  } */

  getProducts(){
    if(this._isLoading) return;

    this._isLoading = true;
    this.http.get<ApiResponse<ProductoResponseEntity[]>>
    (`${this.apiUrl}Producto`)
    .pipe(
      catchError((err: ErrorApiResponse) => {
        console.log(err);
        this.core.showErrorModal("Error inesperado", err.error.message[0])
        return of({} as ApiResponse<ProductoResponseEntity[]>)
      })
    ) .subscribe(data => {
      this._products = data.data;
    });
    
  }

}
