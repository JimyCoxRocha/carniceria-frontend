import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse, ErrorApiResponse, Category, Product, SubCategory, SimpleProductInSubCategory } from '../interfaces';
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
  const categoryObservable: Observable<Category[]> = 
    this._categories.length !== 0 
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

  getCategoryById(idCategory : number) : Observable<any>{
    return this.http.get<Category>(`${this.apiUrl}Categoria/get-category/${idCategory}`)
    .pipe(
      map((x: any) => {
        return x.data
      }),
      catchError((err: any) => {
        return [{openModal : true, error : err}]
      })
    );
  }

  createCategory( data : any) : Observable<any>{

    return this.http.post<any>(`${this.apiUrl}Categoria`,data)
    .pipe(
      map((response : any)=>{
        return response;
      }),
      catchError((err: any) => {
        return [
            {
              toastError : true, 
              messageToast : "Ha ocurrido un problema, intentalo más tarde!", 
              error : err
            }
          ]
      })
    );
    
  }

  updateCategory( data : any) : Observable<any>{
    return this.http.put<any>(`${this.apiUrl}Categoria/Update`,data)
    .pipe(
      map((response : any)=>{
        return response;
      }),
      catchError((err: any) => {
        return [
            {
              toastError : true, 
              messageToast : "Ha ocurrido un problema, intentalo más tarde!", 
              error : err
            }
          ]
      })
    );
  }

  deleteCategory(idCategory : number) : Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}Categoria/${idCategory}`)
    .pipe(
      map((response : any)=>{
        return response.message;
      }),
      catchError((err: any) => {
        return [{toastError : true, messageToast : "Ha ocurrido un problema, intentalo más tarde!", error : err}]
      })
    );
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

  getSubcategoryById(idSubcategory : number) : Observable<any>{
    return this.http.get<SubCategory>
    (`${this.apiUrl}Categoria/get-subcategory/${idSubcategory}`)
    .pipe(
      map((x: any) => {
        return x.data
      }),
      catchError((err: any) => {
        return [{openModal : true, error : err}]
      })
    );
  }

  createSubcategory(data : any) : Observable<any>{
    return this.http.post<any>(`${this.apiUrl}Categoria/Subcategory`,data)
    .pipe(
      map((response : any)=>{
        return response;
      }),
      catchError((err: any) => {
        return [{toastError : true, messageToast : "Ha ocurrido un problema, intentalo más tarde!",error : err}]
      })
    );
  }

  updateSubcategory( data : any) : Observable<any>{
    return this.http.put<any>(`${this.apiUrl}Categoria/Subcategory/Update`,data)
    .pipe(
      map((response : any)=>{
        return response;
      }),
      catchError((err: any) => {
        return [
            {
              toastError : true, 
              messageToast : "Ha ocurrido un problema, intentalo más tarde!", 
              error : err
            }
          ]
      })
    );
  }

  deleteSubcategory(idSubcategory : number) : Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}Categoria/Subcategory/${idSubcategory}`)
    .pipe(
      map((response : any)=>{
        return response.message;
      }),
      catchError((err: any) => {
        return [{toastError : true, messageToast : "Ha ocurrido un problema, intentalo más tarde!", error : err}]
      })
    );
  }

  getProductsStatusInSubcategory(idSubcategory : number | undefined) : Observable<any>{
    return this.http.get<ApiResponse<SimpleProductInSubCategory[]>>
    (`${this.apiUrl}Producto/product-to-subcategory${idSubcategory ? '/' + idSubcategory : ''}`)
    .pipe(
      map((x: ApiResponse<SimpleProductInSubCategory[]>) => {
        return x.data
      }),
      catchError((err: any) => {
        return [{openModal : true, error : err}]
      })
    );
  }

}
