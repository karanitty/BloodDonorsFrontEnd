import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsAdminService } from '../details-admin.service';
import { UserDonorRequestModel } from './admin-home.model';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  donorRequest:UserDonorRequestModel[] = [];
  index=0;

  constructor(private admindetailsService:DetailsAdminService, private router:Router) { }

  ngOnInit(): void {
    this.admindetailsService.getDonorsReq().subscribe((data)=>{
      this.donorRequest = JSON.parse(JSON.stringify(data));
      console.log(this.donorRequest);
    });
  }

  acceptDonor(donor:any){
    this.admindetailsService.acceptDonor(donor);
    alert('Donor request has been verified');
    this.router.navigate(['/admin_donors']);
  }

  rejectDonor(donor:any){
    var donorId = donor._id.toString();
    console.log(donorId);
    this.admindetailsService.rejectDonor(donorId);
    alert('Donor request has been rejected');
    this.router.navigate(['/admin_donors']);
  }

}
