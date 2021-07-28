import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsAdminService {

  constructor(private http:HttpClient) { }

  getDonorsReq(){
    return this.http.get('http://localhost:3000/admin/get_donors_request');
  }

  acceptDonor(donor:any){
    console.log(donor);
    return this.http.put('http://localhost:3000/admin/accept_donors_request',donor)
    .subscribe(data=>{console.log(data)});
  }

  rejectDonor(donor:any){
    console.log(donor);
    return this.http.delete('http://localhost:3000/admin/reject_donors_request/'+donor)
    .subscribe(data=>{console.log(data)});
  }

  getDonors(){
    return this.http.get('http://localhost:3000/admin/get_donors');
  }

  getDonor(id:any){
    return this.http.get('http://localhost:3000/admin/get_donor/'+id);
  }

  editDonor(donor:any){
    console.log(donor);
    return this.http.put('http://localhost:3000/admin/edit_donor',{'donor':donor})
    .subscribe(data=>{console.log(data)});
  }

  deleteDonor(id:any){
    console.log(id);
    return this.http.delete('http://localhost:3000/admin/delete_donor/'+id)
    .subscribe(data=>{console.log(data)});
  }
}
