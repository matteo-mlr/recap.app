import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../services/firebase-auth.service';

@Component({
  selector: 'app-firebase-login',
  templateUrl: './firebase-login.component.html',
  styleUrls: ['./firebase-login.component.scss'],
})
export class FirebaseLoginComponent implements OnInit {

  constructor(
    public firebaseAuthService: FirebaseAuthService
  ) { }

  ngOnInit() {
  }

}
