import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, throwError } from 'rxjs';
import { AppConstants } from 'src/app/core/constants';
import { ApiResponse, ErrorApiResponse } from 'src/app/core/interfaces';
import { CoreService, StorageService } from 'src/app/core/services';
import { EncryptService } from 'src/app/core/services/encrypt.service';
import { environment } from 'src/environments/environment';
import { ILogin, IRegistration, IUserInformation, IUserLoggedIn } from '../interfaces/auth.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLogin: IUserLoggedIn | null = null;
  _isLoading: boolean = false;
  userSimpleData: IUserInformation | null = null;
  
  apiUrl = environment.API_URL;
  
  constructor(
    private http: HttpClient,
    private core: CoreService,
    private crypt: EncryptService,
    private storage: StorageService,
    private router: Router
  ) { }

  login( user: ILogin ){
    if(this._isLoading) return; this._isLoading = true;

    this.http.post<ApiResponse<IUserLoggedIn>>
    (`${this.apiUrl}Autenticacion/login`, user)
    .pipe(
      catchError((err: ErrorApiResponse) => {
        this._isLoading = false;
        this.core.showErrorModal({
          title: "No inició sesión",
          contentHtml: err.error.message[0]
        })
        throw err;
      })
    ).subscribe(data => {
      this.handleStorage(data.data);
      this._isLoading = false;
      this.userLogin = data.data;

      if(data.data.isAdminUser)
        this.router.navigate(['/admin']);
      else
        this.router.navigate(['/']);
    });
  }

  get userName(){
    const authUser = this.storage.getLocalStorage(AppConstants.LocalStorage.auth);
    if(!authUser) return '';
    try{
      const user: IUserLoggedIn = this.crypt.decrypt(authUser);
      return user.username;
    }catch(err){}
    
    return '';
  }
  
  register( user: IRegistration ){
    if(this._isLoading) return; this._isLoading = true;

    this.http.post<ApiResponse<IUserLoggedIn>>
    (`${this.apiUrl}Autenticacion/register`, user)
    .pipe(
      catchError((err: ErrorApiResponse) => {
        this._isLoading = false;
        this.core.showErrorModal({
          title: "No se registró",
          contentHtml: err.error.message[0]
        })
        throw err;
      })
    ).subscribe(data => {
      this.handleStorage(data.data);
      this._isLoading = false;
      this.userLogin = data.data;
        this.core.showMessageModal({
          title: "Felicidades!",
          contentHtml: "Usuario Creado Correctamente. ¡Bienvenido!",
          primaryButton: {
            name: "Ok",
            text: "Ok"
          }
        })
        this.router.navigate(['/']);
    });
  }


  handleStorage(data: IUserLoggedIn){
    
    this.storage.setStorage({
      element: this.crypt.encrypt(JSON.stringify(data)),
      keyStorage: AppConstants.LocalStorage.auth
    })
    this.storage.setStorage({
      element: data?.username,
      keyStorage: AppConstants.LocalStorage.username
    })
  }

  isAdminUser(){
    const authUser = this.storage.getLocalStorage(AppConstants.LocalStorage.auth);
    if(!authUser) return false;
    try{
      const user: IUserLoggedIn = this.crypt.decrypt(authUser);

      if(user.isAdminUser) return true;
    }catch(err){}
    
    return false;
  }

  //NOTA: colocar otro metodo para verificar si el usuario es administrador, verificando el token obviamente
  isAuthUser(){
    const authUser = this.storage.getLocalStorage(AppConstants.LocalStorage.auth);
    if(!authUser) return false;
    try{
      const user: IUserLoggedIn = this.crypt.decrypt(authUser);

      if(user.token) return true;
    }catch(err){}
    
    return false;
  }

  getSimpleDataUser(){
    this._isLoading = true;
    console.log(this.userName);
    return this.http.get<ApiResponse<IUserInformation>>
    (`${this.apiUrl}User/${this.userName}`)
    .pipe(
      catchError((err: ErrorApiResponse) => {
        this._isLoading = false;
        this.core.showErrorModal({
          title: "No pudo obtener información del usuario",
          contentHtml: err.error.message[0]
        })
        throw err;
      })
    );
  }

  getMenu(){
    const authUser = this.storage.getLocalStorage(AppConstants.LocalStorage.auth);
    if(!authUser) return [];
    try{
      const user: IUserLoggedIn = this.crypt.decrypt(authUser);
      if(!user.isAdminUser) return [];

      return user.menu;

    }catch(err){}
    
    return [];
  }

  closeSession(){
    try{
      this.storage.removeKeyStorage(AppConstants.LocalStorage.auth);
      this.storage.removeKeyStorage(AppConstants.LocalStorage.username);
    }catch(err){}
  }

}
