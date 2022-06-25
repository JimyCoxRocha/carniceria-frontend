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

  createCategory( data : IUploadImageRequest) : Observable<IUploadImageResponse>{
    return this.http.post<ApiResponse<IUploadImageResponse>>(`${this.apiUrl}Blob/upload-image`,data)
    .pipe(
      map((response : ApiResponse<IUploadImageResponse>)=>{
        return response.data;
      }),
      catchError((err: ErrorApiResponse) => {
        this.core.showErrorModal({
          title: "Error inesperado",
          contentHtml: err.error.message[0]
        })
        return of({} as IUploadImageResponse)
      })
    );
  }



}
