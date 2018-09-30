import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSelectModule,
  MatButtonModule,
  MatInputModule,
  MatExpansionModule,
  } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

import { environment } from '../environments/environment';
import {FirebaseOptionsToken} from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { DashComponent } from './dash/dash.component';
import { AuthGuardService } from './services/auth-guard.service';
import { DbbackendService } from './services/dbbackend.service';
import { SignupComponent } from './signup/signup.component';
import { RoomService } from './services/room.service';
import { RoomViewComponent } from './room-view/room-view.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'view', component: RoomViewComponent, canActivate: [AuthGuardService]},
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomsComponent,
    PageNotFoundComponent,
    LoginComponent,
    DashComponent,
    SignupComponent,
    RoomViewComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    AngularFireAuthModule,
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService, AuthGuardService, DbbackendService, RoomService, { provide: FirebaseOptionsToken, useValue: environment.firebase }],
  bootstrap: [AppComponent]
})
export class AppModule { }
