import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http:HttpClient) { }

  getUser(email:any){
    return this.http.get('http://localhost:3000/user/details/'+email);
  }
}
