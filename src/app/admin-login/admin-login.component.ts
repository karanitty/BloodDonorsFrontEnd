import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    name:['',Validators.required],
    password:['',Validators.required]
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
    console.log(this.admin.value);
    this.auth.adminLogin(this.admin.value)
    .subscribe(
      res=>{
        localStorage.setItem('token',res.token);
        localStorage.setItem('user',res.access);
        console.log('Success');
        this.router.navigate(['/admin_home']);
      },
      err=>{
        console.log(err);
        this.errorMsg = err;
      }
      
    )
  }

}
