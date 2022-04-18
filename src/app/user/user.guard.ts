import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LoggedinService } from '../loggedin.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private tsService: ToastrService, private router: Router,private loggedInService:LoggedinService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("user guard called...");

    let role = localStorage.getItem("role") as string
    if (this.loggedInService.role  != "customer") {
      this.tsService.error("Invalid Access!!!")
      this.router.navigateByUrl("/login")
      return false
    }

    return true;
  }

}
