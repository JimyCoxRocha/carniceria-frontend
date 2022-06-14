import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, ConnectableObservable, map, Observable } from 'rxjs';
import { ApiResponse, ErrorApiResponse } from 'src/app/core/interfaces';
import { CoreService } from 'src/app/core/services';
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
  
  constructor(
    private http: HttpClient,
    private core: CoreService
  ) { }

  getProductToTable(){
    if(this._isLoading) return; this._isLoading = true;

    this.http.get<ApiResponse<IProductAdminSimple[]>>
    (`${this.apiUrl}Producto/simple-products`)
    .pipe(
      catchError((err: ErrorApiResponse) => {
        this._isLoading = false;
        this.core.showErrorModal({
          title: "Error al cargar la información",
          contentHtml: err.error.message[0]
        })
        throw err;
      })
    ).subscribe(data => {
      this.productsToTable = data.data;
    });
  }

  getDetailToTable(idProduct: number): Observable<IProductAdminDetail>{
    this._isLoading = true;

    return this.http.get<ApiResponse<IProductAdminDetail>>
    (`${this.apiUrl}Producto/detail-product/${idProduct}`)
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
}
