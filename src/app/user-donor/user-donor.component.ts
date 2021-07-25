import { JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { DonorModel } from './user-donor.model';

@Component({
  selector: 'app-user-donor',
  templateUrl: './user-donor.component.html',
  styleUrls: ['./user-donor.component.css']
})
export class UserDonorComponent implements OnInit {

  donor:DonorModel[] = [];
  index=0;

  constructor(private detailsService:DetailsService) { }

  ngOnInit(): void {
    this.detailsService.getDonors().subscribe((data)=>{
      this.donor = JSON.parse(JSON.stringify(data));
      console.log(this.donor);
    });
  }

}
