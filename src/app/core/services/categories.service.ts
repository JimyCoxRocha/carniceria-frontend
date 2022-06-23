import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse, ErrorApiResponse, Category, Product, SubCategory } from '../interfaces';
import { CoreService, StorageService } from '.';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  _categories: Category[] = [];
  _subCategories: SubCategory[] = [];
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

  getCategories(): Observable<Category[]>{

    return this.http.get<ApiResponse<Category[]>>
    (`${this.apiUrl}Categoria`)
    .pipe(
      map((x: ApiResponse<Category[]>) => {
        this._categories = x.data;
        return x.data
      }),
      catchError((err: ErrorApiResponse) => {
        this.core.showErrorModal({
          title: "Error inesperado",
          contentHtml: err.error.message[0]
        })
        return of({} as Category[])
      })
    );
  }

  categories(): Observable<Category[]>{
  const categoryObservable: Observable<Category[]> = this._categories.length !== 0 
    ? new Observable<Category[]>(subscriber => {
        subscriber.next(this._categories);
        subscriber.complete()
      })
    : this.getCategories();
    return categoryObservable;
  }

  categoriesAdmin(): Observable<Category[]>{

    return this.http.get<ApiResponse<Category[]>>
    (`${this.apiUrl}Categoria/only-categories`)
    .pipe(
      map((x: ApiResponse<Category[]>) => {
        return x.data
      }),
      catchError((err: ErrorApiResponse) => {
        this.core.showErrorModal({
          title: "Error inesperado",
          contentHtml: err.error.message[0]
        })
        return of({} as Category[])
      })
    );
  }

  getCategoryById(idCategory : number) : Observable<Category>{
    return this.http.get<ApiResponse<Category>>
    (`${this.apiUrl}Categoria/get-category/${idCategory}`)
    .pipe(
      map((x: ApiResponse<Category>) => {
        return x.data
      }),
      catchError((err: ErrorApiResponse) => {
        this.core.showErrorModal({
          title: "Error inesperado",
          contentHtml: err.error.message[0]
        })
        return of({} as Category)
      })
    );
  }

  createCategory( data : any) : Observable<any>{
    return this.http.post<any>(`${this.apiUrl}Categoria`,data);
  }

  updateCategory(){}

  deleteCategory(idCategory : number) : Observable<ApiResponse<any>>{
    return this.http.delete<ApiResponse<any>>(`${this.apiUrl}Categoria/${idCategory}`)
  }

  subCategories() : Observable<SubCategory[]>{
    const subCategoryObservable: Observable<SubCategory[]> = this._subCategories.length !== 0 
    ? new Observable<SubCategory[]>(subscriber => {
        subscriber.next(this._subCategories);
        subscriber.complete()
      })
    : this.getAllSubCategories();
    return subCategoryObservable;
  }

  getAllSubCategories() : Observable<SubCategory[]>{
    return this.http.get<ApiResponse<SubCategory[]>>
    (`${this.apiUrl}Categoria/sub-categories`)
    .pipe(
      map((x: ApiResponse<SubCategory[]>) => {
        return x.data
      }),
      catchError((err: ErrorApiResponse) => {
        this.core.showErrorModal({
          title: "Error inesperado",
          contentHtml: err.error.message[0]
        })
        return of({} as SubCategory[])
      })
    );
  }

  getSubcategoryById(idSubcategory : number) : Observable<SubCategory>{
    return this.http.get<ApiResponse<SubCategory>>
    (`${this.apiUrl}Categoria/get-subcategory/${idSubcategory}`)
    .pipe(
      map((x: ApiResponse<SubCategory>) => {
        return x.data
      }),
      catchError((err: ErrorApiResponse) => {
        this.core.showErrorModal({
          title: "Error inesperado",
          contentHtml: err.error.message[0]
        })
        return of({} as SubCategory)
      })
    );
  }

  createSubcategory(data : [SubCategory]) : Observable<any>{
    return this.http.post<any>('',data);
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
