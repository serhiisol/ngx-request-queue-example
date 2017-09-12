import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public first(): Observable<any> {
    return this.http.get(`${this.apiUrl}/first`);
  }

  public second(): Observable<any> {
    return this.http.get(`${this.apiUrl}/second`);
  }

  public third(): Observable<any> {
    return this.http.get(`${this.apiUrl}/third`);
  }
}
