import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  userData = null;
  constructor(private _HttpClient:HttpClient) { }
  decodeUserData()
  {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken:any = jwtDecode(encodedToken);
    console.log(decodedToken);
    this.userData= decodedToken;
  }
  register(userData:object):Observable<any>
  {
      return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signup',userData)
  }
  login(userData:object):Observable<any>
  {
      return this._HttpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signin',userData)
  }
}
