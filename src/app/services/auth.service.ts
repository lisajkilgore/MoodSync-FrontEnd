import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

const Api_Url = 'https://moodsync.azurewebsites.net';

@Injectable()
export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();

  constructor(private _http: HttpClient, private _router: Router) { }

  register(regUserData: RegisterUser): Observable<any> {
    return this._http.post(`${Api_Url}/api/Account/Register`, regUserData);
  }

  login(loginInfo, callback): void{
    const str = `grant_type=password&username=${encodeURI(loginInfo.username)}&password=${encodeURI(loginInfo.password)}`;
    const url = `${Api_Url}/Token`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this._http.post(url, str, { headers }).subscribe(value => console.log(value));
  }

  
  

  currentUser(): Observable<Object>{
    if (!localStorage.getItem('id_token')) { return new Observable(observer => observer.next(false));}
    
    return this._http.get(`${Api_Url}/api/Account/UserInfo`, {headers: this.setHeader() });
  }

  logout(): Observable<Object> {
    localStorage.clear();
    this.isLoggedIn.next(false);

    return this._http.post(`${Api_Url}/api/Account/Logout`, {headers: this.setHeader() });
  }
  private setHeader(): HttpHeaders {
    const x= new HttpHeaders({ 'Content-Type': 'application/json' });
    x.set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
    return x
  }
}
