import { Injectable } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { GooglePhotoService } from '../services/google-photo.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  userData: any; // Save logged in user data
  googleLoginProvider;

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public googlePhotosService: GooglePhotoService
  ) {
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      this.userData = user;
    });
    this.googleLoginProvider = new auth.GoogleAuthProvider();
    this.googleLoginProvider.addScope('https://www.googleapis.com/auth/photoslibrary.appendonly');
  };

  async googleAuth() {
    return this.authLogin(this.googleLoginProvider).then((res: any) => {
    });
  }

  async authLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        localStorage.setItem('authToken', result.user['multiFactor']['user']['stsTokenManager'].accessToken);
        localStorage.setItem('refreshToken', result.user['multiFactor']['user']['stsTokenManager'].refreshToken);
        this.googlePhotosService.setAuthToken(result.user['multiFactor']['user']['stsTokenManager'].accessToken);
        console.log(result.user);
        this.router.navigateByUrl('/tabs/camera');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

}
