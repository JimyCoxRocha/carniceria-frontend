import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeasuresProductService {

  apiUrl = environment.API_URL;
  
  constructor(
    private http: HttpClient,
  ) { }

  getAllMeasuresProduct() : Observable<any>{
    return this.http.get<any>(`${this.apiUrl}MeasureUnit`)
    .pipe(
      map((response : any)=>{
        return response;
      }),
      catchError((err: any) => {
        return [{openModal : true, error : err}]
      })
    );
  }
}
