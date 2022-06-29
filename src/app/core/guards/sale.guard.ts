import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { ProductsService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class SaleGuard implements CanActivate, CanLoad {
  constructor( 
    private productsService: ProductsService, 
    private router: Router,
    private auth: AuthService
  ){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.productsService.getProductStorage().length == 0 || this.auth.isAuthUser()){
        this.router.navigate(['/']);
        return false
      }
      return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      if(this.productsService.getProductStorage().length == 0 || this.auth.isAuthUser()){
        this.router.navigate(['/']);
        return false
      }
      return true;
  }
}
