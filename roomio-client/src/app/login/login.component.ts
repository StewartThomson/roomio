import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { DbbackendService } from '../services/dbbackend.service';
import { FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup;
  loginFailed = false;

  constructor(private authService: AuthService, private router: Router, private dbbackendservice: DbbackendService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  signInWithEmail(){
    this.loginFailed = false;
    let email = this.form.value.email.trim();
    let password = this.form.value.password;
    this.authService.signInRegular(email, password).then((res) => {
      console.log(res);
      this.dbbackendservice.getMateByEmail(email).then(res => {
        console.log(res);
        this.router.navigate(['view']);
      }).catch(err => {
        console.log(err);
        this.loginFailed = true;
        this.authService.logout();
      })
    }).catch((err) => {
      console.log('error: ' + err);
      this.loginFailed = true;
    });
  }

  reset(){
    this.form.reset();
  }
}