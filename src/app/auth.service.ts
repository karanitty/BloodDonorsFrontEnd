import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  userSignUp(user:any){
    console.log(user);
    return this.http.post('http://localhost:3000/signup/user',user);
  }

  adminLogin(user){
    console.log(user);
    return this.http.post('http://localhost:3000/login/admin',user);
  }

  userLogin(user){
    console.log(user);
    return this.http.post('http://localhost:3000/login/user',user);
  }
}
