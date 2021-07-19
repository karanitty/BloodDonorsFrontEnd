import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  submitted = false;
  errorMsg:String = '';

  user= this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]
  });

  constructor(private router:Router, private auth:AuthService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  get formControl(){
    return this.user.controls;
  }

  userLogin(){
    this.submitted=true;
    this.errorMsg='';
    console.log(this.user.value);
    this.auth.userLogin(this.user.value)
    .subscribe(
      res=>{
        localStorage.setItem('token',res.token);
        localStorage.setItem('user',res.access);
        console.log('Success');
        this.router.navigate(['/donors']);
      },
      err=>{
        console.log(err);
        this.errorMsg = err;
      }
    )

  }

}
