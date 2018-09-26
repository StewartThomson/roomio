import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe((user) => {
      if(user){
        this.userDetails = user;
      }else{
        this.userDetails = null;
      }
    });
  }

  signInRegular(email, password){
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  isLoggedIn(){
    return this.userDetails != null;
  }

  logout(){
    this._firebaseAuth.auth.signOut().then();
  }

  returnEmail(){
    return this._firebaseAuth.auth.currentUser.email;
  }

  createUser(email, password){
    return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
  }

  deleteUser(){
    return this.userDetails.delete();
  }
}
