import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { AddDonorComponent } from './add-donor/add-donor.component';
import { EditDonorComponent } from './edit-donor/edit-donor.component';
import { UserDonorComponent } from './user-donor/user-donor.component';
import { AdminDonorComponent } from './admin-donor/admin-donor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    UserLoginComponent,
    AdminLoginComponent,
    UserSignupComponent,
    AddDonorComponent,
    EditDonorComponent,
    UserDonorComponent,
    AdminDonorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
