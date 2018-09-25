import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { DbbackendService } from '../services/dbbackend.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  emailTaken = false;

  constructor(private authService: AuthService, private router: Router, private dbbackendservice: DbbackendService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  signUp(){
    this.emailTaken = false;
    let name: string = this.form.value.name.trim();
    let email: string = this.form.value.email.trim();
    let password: string = this.form.value.password;

    this.authService.createUser(name, email, password).then(res => {
      res.updateProfile({displayName: name, photoURL: ''});
      this.authService.signInRegular(email, password).then(res => {
        console.log(res);
        this.dbbackendservice.createMate(name, email).then(res => {
          console.log(res);
          this.router.navigate(['view']);
        }).catch(() => {
          console.log('Error creating mate');
          this.authService.deleteUser();
        });
        
      }).catch((err) => console.log('error: ' + err));
    }).catch((err) => { 
      console.log('error: ' + err);
      this.emailTaken = true;
    });
  }

  reset(){
    this.form.reset();
  }
}
