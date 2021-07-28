import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, public auth:AuthService) { }

  ngOnInit(): void {
  }

  logoutAdmin(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/admin_login']);
  }

  logoutUser(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('donor');
    this.router.navigate(['/user_login']);
  }

}
