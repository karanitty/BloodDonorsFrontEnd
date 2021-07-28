import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsAdminService } from '../details-admin.service';

@Component({
  selector: 'app-admin-edit-donor',
  templateUrl: './admin-edit-donor.component.html',
  styleUrls: ['./admin-edit-donor.component.css']
})
export class AdminEditDonorComponent implements OnInit {

  constructor(private admindetailsService:DetailsAdminService, private router:Router) { }

  donor={
    name:'',
    email:'',
    address:'',
    district:'',
    blood:'',
    phone:''
  }

  ngOnInit(): void {
    let donorId = localStorage.getItem('editDonorId');
    this.admindetailsService.getDonor(donorId).subscribe((data)=>{
      console.log(data);
      this.donor = JSON.parse(JSON.stringify(data));
    });
  }

  editDonor(){
    console.log(this.donor);
    this.admindetailsService.editDonor(this.donor);
    alert('Donor data has been updated');
    this.router.navigate(['/admin_donors']);
  }

}
