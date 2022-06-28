import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { ApiResponse, ErrorApiResponse } from 'src/app/core/interfaces';
import { CoreService } from 'src/app/core/services';
import { IProductForm } from 'src/app/shared/form-product/page/form-product.component';
import { environment } from 'src/environments/environment';
import { IProductAdminSimple, IProductAdminDetail } from '../interfaces/product-admin.interface';



@Injectable({
  providedIn: 'root'
})
export class ProductoAdminService {
  _isLoading: boolean = false;
  apiUrl = environment.API_URL;
  productsToTable: IProductAdminSimple[] = [];
  errorLoadingData: boolean = false;
  _products : IProductAdminSimple[] = []
  
  constructor(
    private http: HttpClient,
    private core: CoreService
  ) { }

  getProductToTable() : Observable<IProductAdminSimple[]>{
    return this.http.get<ApiResponse<IProductAdminSimple[]>>
    (`${this.apiUrl}Producto/simple-products`)
    .pipe(
      map((x: ApiResponse<IProductAdminSimple[]>) => {
        this._products = x.data;
        return x.data
      }),
      catchError((err: ErrorApiResponse) => {
        this.core.showErrorModal({
          title: "Error al cargar la información",
          contentHtml: err.error.message[0]
        })
        return of ({} as IProductAdminSimple[]);
      })
    )
  }

  getDetailToTable(idProduct: number): Observable<IProductAdminDetail>{
    return this.http.get<ApiResponse<IProductAdminDetail>>
    (`${this.apiUrl}Producto/product-detail/${idProduct}`)
    .pipe(
      map((x: ApiResponse<IProductAdminDetail>) => {
        return x.data
      }),
      catchError((err: ErrorApiResponse) => {
        this._isLoading = false;
        this.core.showErrorModal({
          title: "Error al cargar la información",
          contentHtml: err.error.message[0]
        })
        this.errorLoadingData = true;
        throw err;
      })
    );
  }

  createProduct( data : IProductForm) : Observable<any>{
    return this.http.post<any>(`${this.apiUrl}Producto`,data)
    .pipe(
      map((response : any)=>{
        return response;
      }),
      catchError((err: any) => {
        return [{ toastError : true, messageToast : "Ha ocurrido un problema, intentalo más tarde!", error : err}]
      })
    );
  }
  
  updateProduct(idProduct : number){
   
  }

  activeProduct(idProduct : number){
    return this.http.put<any>(`${this.apiUrl}Producto/enable/${idProduct}`,'')
    .pipe(
      map((response : any)=>{
        return response.message;
      }),
      catchError((err: any) => {
        return [{toastError : true, messageToast : "Ha ocurrido un problema, intentalo más tarde!", error : err}]
      })
    ); 
  }

  deleteProduct(idProduct : number) : Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}Producto/${idProduct}`)
    .pipe(
      map((response : any)=>{
        return response.message;
      }),
      catchError((err: any) => {
        return [{toastError : true, messageToast : "Ha ocurrido un problema, intentalo más tarde!", error : err}]
      })
    ); 
  }
}
