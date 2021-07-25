import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-edit-donor',
  templateUrl: './edit-donor.component.html',
  styleUrls: ['./edit-donor.component.css']
})
export class EditDonorComponent implements OnInit {

  constructor(private detailsService:DetailsService, private router:Router) { }

  donor = {
    name:'',
    email:'',
    address:'',
    district:'',
    blood:'',
    phone:''
  }

  ngOnInit(): void {
    let userEmail = localStorage.getItem('user');
    this.detailsService.getDonor(userEmail).subscribe((data)=>{
      console.log(data);
      this.donor = JSON.parse(JSON.stringify(data));
    });
  }

  editDonor(){
    console.log(this.donor);
    this.detailsService.editDonor(this.donor);
    alert('Donor data has been updated');
    this.router.navigate(['/donors']);
  }

}
