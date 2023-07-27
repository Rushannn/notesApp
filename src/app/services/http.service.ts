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

  get(endpointPart: string): Observable<any> {
    const endpoint = `${this.apiUrl}/${endpointPart}`;
    return this.http.get(endpoint);
  }

  post(endpointPart: string, data: any): Observable<any> {
    const endpoint = `${this.apiUrl}/${endpointPart}`;
    return this.http.post(endpoint, data);
  }
}
