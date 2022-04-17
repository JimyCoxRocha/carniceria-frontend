import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { ApiResponse, ErrorApiResponse } from 'src/app/core/interfaces/api-response/ApiResponse';
import { CoreService } from 'src/app/core/services/core.service';
import { environment } from 'src/environments/environment';
import { CommunicationEntity } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  _comm: CommunicationEntity[] = [];
  _isLoading: boolean = false;
  
  apiUrl = environment.API_URL;
  
  constructor(
    private http: HttpClient,
    private core: CoreService
  ) { }

  getCommunications(){
    if(this._isLoading) return;

    this._isLoading = true;
    this.http.get<ApiResponse<CommunicationEntity[]>>
    (`${this.apiUrl}Communication`)
    .pipe(
      catchError((err: ErrorApiResponse) => {
        console.log(err);
        this.core.showErrorModal("Error inesperado", err.error.message[0])
        return of({} as ApiResponse<CommunicationEntity[]>)
      })
    ) .subscribe(data => {
      this._comm = data.data;
    });
    
  }
}
