import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  public get<T>(endpointPart: string): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${endpointPart}`);
  }

  post(endpointPart: string, data: any): Observable<any> {
    const endpoint = `${this.apiUrl}/${endpointPart}`;
    return this.http.post(endpoint, data);
  }
}
