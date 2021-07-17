import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  submitted = false;
  errorMsg:String = '';

  admin = this.fb.group({
    name:['',[Validators.required]],
    password:['',[Validators.required]]
  });

  constructor(private auth:AuthService, private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  get formControl(){
    return this.admin.controls;
  }

  adminLogin(){
    this.submitted = true;
    this.errorMsg='';
  }

}
