import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor (private route: ActivatedRoute, private router: Router) {}

  canActivate(): boolean {

    let authTokenFound = !!localStorage.getItem('authToken');

    if (!authTokenFound) {
      this.router.navigate(['/login']);
    };

    return !!localStorage.getItem('authToken');

  }

}
