import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { AppConstants } from 'src/app/core/constants';
import { ApiResponse, ErrorApiResponse } from 'src/app/core/interfaces';
import { CoreService, StorageService } from 'src/app/core/services';
import { EncryptService } from 'src/app/core/services/encrypt.service';
import { environment } from 'src/environments/environment';
import { IUserLogin } from '../interfaces/auth.interface';


interface ILogin {
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLogin: IUserLogin | null = null;
  _isLoading: boolean = false;
  
  apiUrl = environment.API_URL;
  
  constructor(
    private http: HttpClient,
    private core: CoreService,
    private crypt: EncryptService,
    private storage: StorageService,
  ) { }

  login( user: ILogin ){
    if(this._isLoading) return; this._isLoading = true;

    this.http.post<ApiResponse<IUserLogin>>
    (`${this.apiUrl}Autenticacion/login`, user)
    .pipe(
      catchError((err: ErrorApiResponse) => {
        this._isLoading = false;
        this.core.showErrorModal("Error Ocurrido", err.error.message[0])
        return of({} as ApiResponse<IUserLogin>)
      })
    ).subscribe(data => {
      this.handleStorage(data.data);
      this._isLoading = false;
      this.userLogin = data.data;
    });
  }
  
  handleStorage(data: IUserLogin){
    this.storage.setStorage({
      element: this.crypt.encrypt(JSON.stringify(data)),
      keyStorage: AppConstants.LocalStorage.auth
    })
    this.storage.setStorage({
      element: data.username,
      keyStorage: AppConstants.LocalStorage.username
    })
  }
}
