import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse, ErrorApiResponse, Category } from '../interfaces';
import { CoreService, StorageService } from '.';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  _categories: Category[] = [];
  _isLoading: boolean = false;

  apiUrl = environment.API_URL;
  constructor( 
    private http: HttpClient,
    private storage: StorageService,
    private core: CoreService
  ) { }


/*
   setProductStorage( idProducto: number, prodList: Productos[] ){
    const listStorage = JSON.parse(this.storage.getLocalStorage(LocalStorage.product_list) || '[]') as number[];
    listStorage.push(idProducto);
    this.storage.setProduct(listStorage);
    prodList.forEach( m => {
      if (m.id_producto == idProducto)
        m.isSelected = true
    })
  }

  rmProductStorage( idProducto: number, prodList: Productos[] ){
    const listStorage = JSON.parse(this.storage.getLocalStorage(LocalStorage.product_list) || '[]') as number[];
    const index = listStorage.indexOf(idProducto);
    listStorage.splice(index, 1);
    this.storage.setProduct(listStorage);
    prodList.forEach( m => {
      if (m.id_producto == idProducto)
        m.isSelected = false
    })
  }

  rmAllProductStorage(  ){
    const reset: number[] = [];
    this.storage.setProduct(reset)
  } */

  categories(): Observable<Category[]>{

    return this.http.get<ApiResponse<Category[]>>
    (`${this.apiUrl}Categoria`)
    .pipe(
      map((x: ApiResponse<Category[]>) => {
        return x.data
      }),
      catchError((err: ErrorApiResponse) => {
        this.core.showErrorModal("Error inesperado", err.error.message[0])
        return of({} as Category[])
      })
    );
  }
/* 
  get productosCart(): Observable<ApiProductos>{
    return this.http.get<ApiProductos>
    (`${this.apiUrl}VHozaS85TU9uUnhTR2FpMWh0eUJCZz09=gAAAAABgAGpunQZzKslbNqIL71S6nhjanaqWYmni6w7Bv_i0nc49t4WyDc3X6fPWVYzx2Lg_3b8PabFJ5RUF2rS43OGWXQ-Yuw==&id_sucursal=20&id_categoria=485&id_subcategoria=0&offset=0&limit=100`)
    .pipe(
      switchMap( resp =>  of({ 
        productos: [...this.mappingInitData(resp.productos)],
        estado: resp.estado 
      }))
    );
  }

  get onlyProductInCart(): Observable<ApiProductos>{
    return this.http.get<ApiProductos>
    (`${this.apiUrl}VHozaS85TU9uUnhTR2FpMWh0eUJCZz09=gAAAAABgAGpunQZzKslbNqIL71S6nhjanaqWYmni6w7Bv_i0nc49t4WyDc3X6fPWVYzx2Lg_3b8PabFJ5RUF2rS43OGWXQ-Yuw==&id_sucursal=20&id_categoria=485&id_subcategoria=0&offset=0&limit=100`)
    .pipe(
      switchMap( resp =>  of({ 
        productos: [...this.productInCart(resp.productos)],
        estado: resp.estado 
      }))
    );
  }

  private productInCart(productos: Productos[] ): Productos[]{
    const listStorage = JSON.parse(this.storage.getLocalStorage(LocalStorage.product_list) || '[]') as string[];

    const products = productos.filter( x => listStorage.includes(`${x.id_producto}`) )

    return this.mappingInitData(products);
  }
  
  private mappingInitData( productos: Productos[] ): Productos[]{
    const localProducts = this.storage.getLocalStorage(LocalStorage.product_list);

    const productList = productos.map( e => ({
      ...e,
      isSelected: localProducts ? this.productoIsInCart(e.id_producto, localProducts) : false,
      imagenes: e.imagenes.map( image => `https://gestion.promo.ec${image}`)
    }))
    return productList;
  }
  
  private productoIsInCart( idProduct: number, listLS: string ){
    const list = JSON.parse(listLS) as string [];
    return list.includes(`${idProduct}`);
  } */
}
