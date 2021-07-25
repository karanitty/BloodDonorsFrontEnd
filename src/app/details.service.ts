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

  getDonors(){
    return this.http.get('http://localhost:3000/user/get_donors');
  }

  getDonor(email:any){
    return this.http.get('http://localhost:3000/user/get_donor/'+email);
  }

  addDonor(donor:any){
    console.log(donor);
    return this.http.post('http://localhost:3000/user/add_donor',{'donor':donor})
    .subscribe(data=>{console.log(data)});
  }

  editDonor(donor:any){
    console.log(donor);
    return this.http.put('http://localhost:3000/user/edit_donor',{'donor':donor})
    .subscribe(data=>{console.log(data)});
  }
}
