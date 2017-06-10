import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AcctService} from './services/acct.service';
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private acctservice: AcctService, private router: Router) {}

  canActivate() {
    if(this.acctservice.loggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl('/unauthorized');
      return false;
    }
  }
}