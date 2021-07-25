import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-add-donor',
  templateUrl: './add-donor.component.html',
  styleUrls: ['./add-donor.component.css']
})
export class AddDonorComponent implements OnInit {

  constructor(private detailsService:DetailsService, private router:Router) { }

  newDonor = {
    name:'',
    email:'',
    address:'',
    district:'',
    blood:'',
    phone:''
  }

  ngOnInit(): void {
    let userEmail = localStorage.getItem('user');
    this.detailsService.getUser(userEmail).subscribe((data)=>{
      console.log(data);
      this.newDonor = JSON.parse(JSON.stringify(data));
    });
  }

  addDonor(){

  }

}
