import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signInWithEmail(){
    this.authService.signInRegular(this.user.email, this.user.password).then((res) => {
      console.log(res);
      this.router.navigate(['dashboard']);
    }).catch((err) => console.log('error: ' + err));
  }
}

// @Injectable()
// export class AuthService {
//   private user: Observable<firebase.User>;

//   constructor(private _firebaseAuth: AngularFireAuth){
//     this.user = _firebaseAuth.authState;
//   }
// }