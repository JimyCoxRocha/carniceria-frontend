import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse, ErrorApiResponse } from '../interfaces/api-response/ApiResponse';
import { ProductoResponseEntity } from '../interfaces/common/ProductEntity';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  _products: ProductoResponseEntity[] = [];
  _isLoading: boolean = false;
  
  apiUrl = environment.API_URL;
  
  constructor(
    private http: HttpClient,
    private core: CoreService
  ) { }

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
