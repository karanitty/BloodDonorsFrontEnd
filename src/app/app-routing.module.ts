import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDonorComponent } from './add-donor/add-donor.component';
import { AdminDonorComponent } from './admin-donor/admin-donor.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EditDonorComponent } from './edit-donor/edit-donor.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserDonorComponent } from './user-donor/user-donor.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

const routes: Routes = [
  {
    path:'',
    component:LandingPageComponent
  },
  {
    path:'user_login',
    component:UserLoginComponent
  },
  {
    path:'admin_login',
    component:AdminLoginComponent
  },
  {
    path:'user_signup',
    component:UserSignupComponent
  },
  {
    path:'add_donor',
    component:AddDonorComponent
  },
  {
    path:'edit_donor',
    component:EditDonorComponent
  },
  {
    path:'donors',
    component:UserDonorComponent
  },
  {
    path:'admin_donors',
    component:AdminDonorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
