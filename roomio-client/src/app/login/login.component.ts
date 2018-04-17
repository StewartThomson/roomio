import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { DbbackendService } from '../services/dbbackend.service';

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

  constructor(private authService: AuthService, private router: Router, private dbbackendservice: DbbackendService) { }

  ngOnInit() {
  }

  signInWithEmail(){
    this.authService.signInRegular(this.user.email, this.user.password).then((res) => {
      console.log(res);
      this.dbbackendservice.getMateByEmail(this.user.email).then(res => {
        console.log(res);
        this.router.navigate(['dashboard']);
      }).catch(err => {
        console.log(err);
        this.authService.logout();
      })
    }).catch((err) => console.log('error: ' + err));
  }
}