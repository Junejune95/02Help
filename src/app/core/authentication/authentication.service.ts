import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '@model/user';
import { environment } from "@env/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = environment.apiUrl;

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  public get currentToken(): String {
    return JSON.parse(localStorage.getItem('token'));
  }


  login(username: string, password: string) {
    let data = {
      "email": username,
      "password": password
    };
    return this.http.post<any>(`${this.baseUrl}/users/login`, data)
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          // localStorage.setItem('currentUser', JSON.stringify(user.user));
          localStorage.setItem('currentUser', JSON.stringify(user.user));

          localStorage.setItem('token', JSON.stringify(user.token));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
