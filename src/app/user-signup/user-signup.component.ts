import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  submitted = false;
  errorMsg:String = '';

  newUser = this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern(/^(?=.*[A-Za-z])(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/)]],
    phone:['',[Validators.required,Validators.pattern('^[0-9]{10}$')]]
  });

  constructor(private fb:FormBuilder, private router:Router, private auth:AuthService) { }

  ngOnInit(): void {
  }

  get formControl(){
    return this.newUser.controls;
  }

  userSignUp(){
    this.submitted = true;
    this.errorMsg = '';
    console.log(this.newUser.value);
    this.auth.userSignUp(this.newUser.value).subscribe(
      res=>{
        alert('User has been Successfully Registered');
        console.log('Success');
        this.router.navigate(['/user_login']);
      },
      err =>{
        if(err.status == 422){
          this.errorMsg = err;
        }
      }
    )
  }

}
