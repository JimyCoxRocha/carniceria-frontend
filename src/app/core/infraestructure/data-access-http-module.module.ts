import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response/ApiResponse';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DataAccessHttpModuleModule<T> {
  constructor( private http: HttpClient ) { }
  
  Get(apiUrl:string): Promise<ApiResponse<T>>{
    return new Promise((resolve, reject) => {
      this.http.get<ApiResponse<T>>(`${apiUrl}Categoria`)
      .subscribe((res: any) => {
        resolve(res);
      }, error => {
        reject(error);
      });
    })
  }
 }
