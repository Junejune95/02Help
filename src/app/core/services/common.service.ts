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

  onLogin(data: any) {
    let url = this.baseUrl + "/users";
    return this.http.post(url, data)
  }

  getRegion() {
    let url = this.baseUrl + "/regions"
    return this.http.get<any>(url).pipe(map((obj) => obj || []));
  }

  getTownship(regionId: String) {
    let url = this.baseUrl + "/townships?regionId=" + regionId;

    return this.http.get<any>(url).pipe(map((obj) => obj || []));
  }

  onCreateContent(data: any) {
    let url = this.baseUrl + "/posts";
    return this.http.post(url, data)
  }

  onLikePost(id: any, status: String) {
    let url = this.baseUrl + "/posts/" + id + "/" + status;
    return this.http.put(url, {});
  }

  getContentList(regionId: String, townshipId: String, isTodayUpdate: boolean, sorting: String, type: String) {
    let url = this.baseUrl + "/posts?tomorrowUpdate=" + isTodayUpdate + "&sorting=" + sorting + "&filter=" + type;
    console.log(townshipId);
    if (regionId && !townshipId)
      url += "&regionId=" + regionId;
    else if (townshipId && regionId)
      url += "&regionId=" + regionId + "&townshipId=" + townshipId;
    // url += regionId && townshipId ? "/posts?regionId=" + regionId + "&townshipId=" + townshipId + "&tomorrowUpdate=" + isTodayUpdate : "/posts?tomorrowUpdate=" + isTodayUpdate;
    return this.http.get<any>(url).pipe(map((obj) => obj || []));
  }

  onCreateComments(message: String, id: String) {
    let url = this.baseUrl + "/posts/" + id + "/comment";
    let msg = {
      "text": message
    }
    return this.http.put(url, msg);
  }
}
