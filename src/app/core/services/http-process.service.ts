import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse, ErrorApiResponse } from '../interfaces';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class HttpProcessService {
  apiUrl = environment.API_URL;
  constructor(
    private http: HttpClient,
    private core: CoreService
  ) { }
  
  requestProducts<T>(url: string): Observable<T>{
    return this.http.get<ApiResponse<T>>
    (`${this.apiUrl}${url}`)
    .pipe(
      map((x: ApiResponse<T>) => {
        return x.data
      }),
      catchError((err: ErrorApiResponse) => {
        this.core.showErrorModal({
          title: "Error inesperado",
          contentHtml: err.error.message[0]
        })
        return of()
      })
    );
  }
  
}
