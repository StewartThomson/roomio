import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';
import { DashComponent } from './dash/dash.component';
import { AuthGuardService } from './services/auth-guard.service';
import { DbbackendService } from './services/dbbackend.service';
import { SignupComponent } from './signup/signup.component';
import { RoomService } from './services/room.service';

const appRoutes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashComponent, canActivate: [AuthGuardService]},
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomsComponent,
    PageNotFoundComponent,
    LoginComponent,
    DashComponent,
    SignupComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireAuthModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [AuthService, AuthGuardService, DbbackendService, RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
