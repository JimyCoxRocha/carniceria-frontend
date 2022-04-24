import { Injectable } from '@angular/core';
import { IProductsCar } from './products.service';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getLocalStorage( key: string ){
    return localStorage.getItem(key);
  }

  setStorage( { element, keyStorage }: { element: IProductsCar[] | string, keyStorage: string }){
    return localStorage.setItem(keyStorage, JSON.stringify(element)
    );
  }
}
