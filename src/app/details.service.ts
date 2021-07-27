import { HttpClient } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
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

  deleteDonor(email:any){
    console.log(email);
    return this.http.delete('http://localhost:3000/user/delete_donor/'+email)
    .subscribe(data=>{console.log(data)});
  }

  notDonor(){
    var email = localStorage.getItem('user');
    this.http.get('http://localhost:3000/user/not_donor'+email)
    .subscribe(data=>{
      if(data){
        return true;
      }
      else{
        return false;
      }
    })
  }

  isDonor(){
    var email = localStorage.getItem('user');
    this.http.get('http://localhost:3000/user/is_donor'+email)
    .subscribe(data=>{
      if(data == true){
        return true;
      }
      else{
        return false;
      }
    });
  }
}
