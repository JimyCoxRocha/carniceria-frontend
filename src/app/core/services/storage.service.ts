import { Injectable } from '@angular/core';
import { LocalStorage } from '../AppConstants/StorageConstants';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getLocalStorage( key: string ){
    return localStorage.getItem(key);
  }
  setUser( user: string  ){
    return localStorage.setItem('user', user)
  }

  setProduct( idProduct: number[] ){
    return localStorage.setItem(
      LocalStorage.product_list, 
      JSON.stringify(idProduct)
    );
  }
}
