import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service'
import { TokenInterceptorService } from './token-interceptor.service';

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
    AdminDonorComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
