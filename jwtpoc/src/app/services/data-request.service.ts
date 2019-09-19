import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataRequestService {
  url = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  verifyLogin(params): Observable<any> {
    return this.http.post(`${this.url}/login`, params);
  }


}