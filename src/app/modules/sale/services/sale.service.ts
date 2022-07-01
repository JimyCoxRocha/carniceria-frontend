import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { catchError } from 'rxjs';
import { ApiResponse, ErrorApiResponse } from 'src/app/core/interfaces';
import { CoreService } from 'src/app/core/services';
import { environment } from 'src/environments/environment';
import { IUserInformation } from '../../auth/interfaces/auth.interface';
import { ISendSale } from '../interfaces/sale.interface';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  _isLoading: boolean = false;
  apiUrl = environment.API_URL;
  
  constructor(
    private core: CoreService,
    private http: HttpClient,
  ) { }

  getProvinces(){
    this._isLoading = true;
    
    return this.http.get<ApiResponse<SelectItemGroup[]>>
    (`${this.apiUrl}Cities/costo-envio`)
    .pipe(
      catchError((err: ErrorApiResponse) => {
        this._isLoading = false;
        throw err;
      })
    );
  }

  setSaleUser(user: ISendSale){
    console.log("setSaleUser: ", user);
    
    return this.http.post<ApiResponse<string>>
    (`${this.apiUrl}Sales/user`, user)
    .pipe(
      catchError((err: ErrorApiResponse) => {
        this._isLoading = false;
        this.core.showErrorModal({
          title: "Tuvimos un error",
          contentHtml: err.error.message[0]
        })
        throw err;
      })
    );

  }

  setSaleNoUser(user: ISendSale){
    console.log("setSaleNoUser");
    return this.http.post<ApiResponse<string>>
    (`${this.apiUrl}Sales/no-user`, user)
    .pipe(
      catchError((err: ErrorApiResponse) => {
        this._isLoading = false;
        this.core.showErrorModal({
          title: "Tuvimos un error",
          contentHtml: err.error.message[0]
        })
        throw err;
      })
    );

  }
}
