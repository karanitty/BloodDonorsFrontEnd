import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  userSignUp(user:any){
    console.log(user);
    return this.http.post('http://localhost:3000/user_signup',user);
  }
}
