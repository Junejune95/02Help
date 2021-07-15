import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  onLogin(data:any) {
    let url = this.baseUrl + "/users";
 
    return this.http.post(url, data)
  }
}
