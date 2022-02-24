import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';
import { GooglePhotoService } from '../services/google-photo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  socialUser: SocialUser;
  isLoggedin = false;

  googleLoginOptions = {
    scope: 'https://www.googleapis.com/auth/photoslibrary.appendonly'
  };

  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    private router: Router,
    private googlePhotoService: GooglePhotoService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      this.setAuthToken(this.socialUser['authToken'])
      this.router.navigateByUrl('/tabs/camera');
    });
  }

  setAuthToken(authToken: string) {
    this.googlePhotoService.setAuthToken(authToken);
    this.setAuthLocal(authToken);
  }

  setAuthLocal(authToken: string) {
    localStorage.setItem('authToken', authToken);
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID, this.googleLoginOptions);
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }

}
