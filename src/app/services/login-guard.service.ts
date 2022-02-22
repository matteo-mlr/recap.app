import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {

  constructor() { }

  getAuthToken(): string {
    return localStorage.getItem('authToken')
  }

}
