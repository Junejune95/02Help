import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';

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

  getRegion() {
    let url = this.baseUrl + "/regions"
    return this.http.get<any>(url).pipe(map((obj) => obj || []));
  }

  getTownship(regionId:String) {
    let url = this.baseUrl + "/townships?regionName="+regionId;

    return this.http.get<any>(url).pipe(map((obj) => obj || []));
  }

  onCreateContent(data:any) {
    let url = this.baseUrl + "/posts";
    return this.http.post(url, data)
  }

  getContentList() {
    let url = this.baseUrl + "/posts?regionName=Region1&townshipName=Town1"
    return this.http.get<any>(url).pipe(map((obj) => obj || []));
  }
}
