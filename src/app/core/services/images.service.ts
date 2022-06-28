import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CoreService } from '.';
import { ApiResponse, ErrorApiResponse, IUploadImageRequest, IUploadImageResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  apiUrl = environment.API_URL;
  constructor(
    private http: HttpClient,
    private core: CoreService
  ) {}

  uploadImage( data : IUploadImageRequest) : Observable<any>{
    return this.http.post<any>(`${this.apiUrl}Blob/upload-image`,data)
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
