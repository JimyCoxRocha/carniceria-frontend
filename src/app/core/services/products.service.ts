import { Injectable } from '@angular/core';
import { AppConstants } from '../constants';
import { Product, ProductoResponse, ErrorApiResponse, ApiResponse } from '../interfaces';
import { StorageService, HttpProcessService, CoreService } from '.';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, of, map } from 'rxjs'; 
import { IProductAdminDetail } from 'src/app/modules/admin-modules/producto/interfaces/product-admin.interface';

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
  apiUrl = environment.API_URL;

  _products: ProductoResponse[] = [];
  _isLoading: boolean = false;
  _productsCar: IProductsCar[] = [];
  _productsInCar: IProductCarStore[] = [];
  errorLoadingData : boolean = false;
  
  constructor(
    private storage: StorageService,
    private http: HttpProcessService,
    private httpClient : HttpClient,
    private core: CoreService,
  ) { }

  getProductInCar(){
    this._isLoading = true;
    this.getAllProducts().subscribe(product => {
      this._isLoading = false;
      this._productsInCar = [];
      this.getProductStorage().forEach(x => {
        product.forEach(y => {
          (x.id == y.product.idProducto)
          && this._productsInCar.push({...(y.product), amount: x.amount});
        })
      })
    });

/*     this.http.requestProducts<ProductoResponse[]>("Producto")
      .subscribe(product => {

        this.getProductStorage().forEach(x => {
          product.forEach(y => {
            (x.id = y.product.idProducto)
            && this._productsInCar.push({...(y.product), amount: x.amount});
          })
        })
    }); */
      
  }

  getProductStorage(){
    try{
      const products = JSON.parse(this.storage.getLocalStorage(AppConstants.LocalStorage.product_list) || '[]') as IProductsCar[];
      this._productsCar = products;
      return products;
    }catch(Exception){
      return [];
    }
  }

  setProductStorage( { id, amount = 1 }: IProductsCar ){
    try{
      const products = this.getProductStorage();
  
      const index = products.findIndex(x => x.id == id);
      
      (index >= 0) 
      ? (products[index].amount = amount)
      : products.push({id, amount});
  
      this._productsCar = products;
  
      this.storage.setStorage(
        {element: JSON.stringify(products), keyStorage: AppConstants.LocalStorage.product_list}
      );
    }catch(Exception){
      this.removeAllProductStorage();
    }
  }

  removeProductStorage( idProducto: number ){
    try{
      const products = this.getProductStorage();
      this._productsCar = products.filter(product => product.id != idProducto);
      this.storage.setStorage(
        {
          element: JSON.stringify(this._productsCar),
          keyStorage: AppConstants.LocalStorage.product_list
        }
      );
    }catch(Exception){
      this.removeAllProductStorage();
    }
  }

  removeAllProductStorage( ){
    this._productsCar = [];
    this.storage.setStorage(
      {
        element: '[]',
        keyStorage: AppConstants.LocalStorage.product_list
      }
    );
  }

  findProductStorage(idProduct: number){
    return this.getProductStorage().find(x => x.id == idProduct);
  }

  getAllProducts(){
    return this.httpClient.get<ApiResponse<ProductoResponse[]>>(`${this.apiUrl}Producto`)
    .pipe(
      map((x: ApiResponse<ProductoResponse[]>) => {
        this._products = x.data;
        return x.data
      }),
      catchError((err: ErrorApiResponse) => {
        this.core.showErrorModal({
          title: "Error inesperado",
          contentHtml: err.error.message[0]
        })
        return of([] as ProductoResponse[])
      })
    );
  }

  getProducts(){
    const products: Observable<ProductoResponse[]> = 
    this._products.length !== 0 
      ? new Observable<ProductoResponse[]>(subscriber => {
          subscriber.next(this._products);
          subscriber.complete()
        })
      : this.getAllProducts();
    return products;
  }

  getProductsByIdCategoryAndSubCategory(idCategory : number, idSubcategory : number) : Observable<any>{
    return this.httpClient.get<any>(`${this.apiUrl}Producto/by-category/${idCategory}/${idSubcategory}`)
    .pipe(
      map((response : any)=>{
        return response.data;
      }),
      catchError((err: any) => {
        return [{openModal : true, error : err}]
      })
    );
  }

  getProductsByIdCategory(idCategory : number) : Observable<any>{
    return this.httpClient.get<any>(`${this.apiUrl}Producto/by-category/${idCategory}`)
    .pipe(
      map((response : any)=>{
        return response.data;
      }),
      catchError((err: any) => {
        return [{openModal : true, error : err}]
      })
    );
  }


  getDetailProduct(idProduct: number): Observable<IProductAdminDetail>{
    this._isLoading = true;

    return this.httpClient.get<ApiResponse<IProductAdminDetail>>
    (`${this.apiUrl}Producto/product-detail/${idProduct}`)
    .pipe(
      map((x: ApiResponse<IProductAdminDetail>) => {
        return x.data
      }),
      catchError((err: ErrorApiResponse) => {
        this._isLoading = false;
        this.core.showErrorModal({
          title: "Error al cargar la informaci??n",
          contentHtml: err.error.message[0]
        })
        this.errorLoadingData = true;
        throw err;
      })
    );
  }

}
