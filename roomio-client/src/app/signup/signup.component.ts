import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    name: '',
    email: '',
    password: ''
  };

  err;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signUp(){
    this.authService.createUser(this.user.name, this.user.email, this.user.password).then((res) => {
      res.updateProfile({displayName: this.user.name});
      this.authService.signInRegular(this.user.email, this.user.password).then((res) => {
        console.log(res);
        this.router.navigate(['dashboard']);
      }).catch((err) => console.log('error: ' + err));
    }).catch((error) => {
      this.err = error;
    });
    
  }
}
