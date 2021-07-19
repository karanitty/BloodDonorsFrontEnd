import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthUserGuard implements CanActivate {

  constructor(private auth:AuthService, private router:Router ){}
  
  canActivate():boolean{
    if(this.auth.loggedIn()){
      if(!this.auth.loggedInAdmin()){
        return true;
      }
      else{
        this.router.navigate(['/admin_home']);
        return false;
      }
    }
    else{
      this.router.navigate(['/user_login']);
      return false;
    }
  }
  
}
