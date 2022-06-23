import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { EncryptService } from "../services/encrypt.service";
import { StorageService } from 'src/app/core/services';
import { AppConstants } from 'src/app/core/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{
  
  constructor(
    private encryptService : EncryptService,
    private storage: StorageService,
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const accessToken = this.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return next.handle(req);
    }

    getToken(){
      const auth = this.storage.getLocalStorage(AppConstants.LocalStorage.auth);
      const menu = this.encryptService.decrypt(auth!);

      const token = menu.token;

      return token;
    }
  
}
