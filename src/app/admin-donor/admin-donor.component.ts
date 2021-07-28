import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsAdminService } from '../details-admin.service';
import { AdminDonorModel } from './admin-donor.model';

@Component({
  selector: 'app-admin-donor',
  templateUrl: './admin-donor.component.html',
  styleUrls: ['./admin-donor.component.css']
})
export class AdminDonorComponent implements OnInit {

  donor:AdminDonorModel[]=[];
  index=0;

  constructor(private admindetailsService:DetailsAdminService, private router:Router) { }

  ngOnInit(): void {
    this.admindetailsService.getDonors().subscribe((data)=>{
      this.donor = JSON.parse(JSON.stringify(data));
      console.log(this.donor);
    });
  }

  editDonor(donor:any){
    localStorage.setItem('editDonorId',donor._id.toString());
    console.log(localStorage.getItem('editDonorId'));
    this.router.navigate(['/admin_edit_donor']);
  }

  deleteDonor(donor:any){
    var donorId = donor._id.toString();
    console.log(donorId);
    this.admindetailsService.deleteDonor(donorId);
    alert('Donor has been deleted');
    this.router.navigate(['/admin_home']);
  }

}
