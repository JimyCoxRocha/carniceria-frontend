import { Injectable } from '@angular/core';
import { IProductsCar } from './products.service';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  removeKeyStorage( key: string ){
    localStorage.removeItem(key);
  }

  getLocalStorage( key: string ){
    return localStorage.getItem(key);
  }

  setStorage( { element, keyStorage }: { element: any, keyStorage: string }){
    return localStorage.setItem(keyStorage, element
    );
  }
}
