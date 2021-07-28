import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDonorComponent } from './add-donor/add-donor.component';
import { AdminDonorComponent } from './admin-donor/admin-donor.component';
import { AdminEditDonorComponent } from './admin-edit-donor/admin-edit-donor.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthUserGuard } from './auth-user.guard';
import { AuthGuard } from './auth.guard';
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
    canActivate:[AuthUserGuard],
    component:AddDonorComponent
  },
  {
    path:'edit_donor',
    canActivate:[AuthUserGuard],
    component:EditDonorComponent
  },
  {
    path:'donors',
    canActivate:[AuthUserGuard],
    component:UserDonorComponent
  },
  {
    path:'admin_donors',
    canActivate:[AuthGuard],
    component:AdminDonorComponent
  },
  {
    path:'admin_home',
    canActivate:[AuthGuard],
    component:AdminHomeComponent
  },
  {
    path:'admin_edit_donor',
    canActivate:[AuthGuard],
    component:AdminEditDonorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
