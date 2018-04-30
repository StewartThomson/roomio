import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

export interface Mate{
  _id: string;
  name: string;
  email: string;
  rooms: Array<{_id: string, name: string}>;
}

export class Mate implements Mate{}

export interface Transaction{
  _id: string;
  title: string;
  description: string;
  roomid: string;
  fromid: string;
  toid: string;
  amount: number;
  date: Date;
}

export class Transaction implements Transaction{}

@Injectable()
export class DbbackendService {
  @Output() trackMate: EventEmitter<Mate> = new EventEmitter();

  private url = 'http://localhost:3000/api';
  private currentUser: Mate = null;

  constructor(private http: HttpClient) { }

  returnUser(){
    return this.currentUser;
  }

  returnUserId(){
    return this.currentUser._id
  }

  returnUserName(){
    return this.currentUser.name;
  }

  async createMate(name: string, email: string){
    let thisUrl = this.url + '/mate/create';
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let user: Mate = new Mate();
    user.name = name;
    user.email = email;

    let result = await new Promise((resolve, reject) => {
      this.http.post<Mate>(thisUrl, user, httpOptions)
      .pipe(
        retry(3),
        catchError((res) => this.handleError(res)),
      ).subscribe(mate => {this.currentUser = mate; resolve('success')});
    });
    
    if(result){
      this.trackMate.emit(this.currentUser);
      return 'Mate Created';
    }else{
      throw 'Error creating mate';
    }
  }

  async getMate(id: string){
    let thisUrl = this.url + '/mate/' + id;
    let result = await new Promise((resolve, reject) => { 
      this.http.get<Mate>(thisUrl)
      .pipe(
        retry(3),
        catchError((res) => this.handleError(res))
      ).subscribe(mate => { this.currentUser = mate; resolve('success') });
    });

    if(result){
      this.trackMate.emit(this.currentUser);
      return result;
    }else{
      throw 'Unable to retrieve mate';
    }
  }

  async getMateByEmail(email: string){
    let thisUrl = this.url + '/mateEmail/' + email;

    let result = await new Promise((resolve, reject) => {
      this.http.get<Mate>(thisUrl)
      .pipe(
        retry(3),
        catchError((res) => this.handleError(res))
      ).subscribe(mate => {this.currentUser = mate; resolve('success')});
    });

    if(result){
      this.trackMate.emit(this.currentUser);
      return 'Mate retrieved';
    }else{
      throw 'Unable to retrieve mate';
    }
  }

  createTransaction(title: string, description: string, fromid: string, toid: string, amount: number){

  }

  getTransaction(id: string){

  }

  handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('Error occurred:', error.error.message);
    }else{
      console.error(`Backend returned code ${error.status}, body was: ${JSON.stringify(error.error)}`);
    }

    return new ErrorObservable('Error occurred, try again later.');
  }
}