import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

export interface Mate{
  name: string;
  email: string;
  rooms: Array<object>;
}

export interface Room{
  name: string;
  balances: Array<Object>;
  admin: string;
  recentlyAdded: string;
  count: number;
}

export interface Transaction{
  title: string;
  description: string;
  fromid: string;
  toid: string;
  amount: number;
  date: Date;
}

@Injectable()
export class DbbackendService {
  private url = '67.207.81.17/api';
  private currentUser: Mate;

  constructor(private http: HttpClient) { }

  createMate(name: string, email: string){
    let thisUrl = this.url + '/mate/create';
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let user: any;
    user.name = name;
    user.email = email;

    this.http.post<Mate>(thisUrl, user, httpOptions)
      .pipe(
        retry(3),
        catchError(this.handleError)
      ).subscribe(mate => this.currentUser = mate);
  }

  getMate(id: string){
    let thisUrl = this.url + '/mate/' + id;

    return this.http.get<Mate>(thisUrl)
      .pipe(
        catchError(this.handleError)
      )
  }

  createRoom(name: string){

  }

  getRoom(id: string){

  }

  createTransaction(title: string, description: string, fromid: string, toid: string, amount: number){

  }

  getTransaction(id: string){

  }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('Error occurred:', error.error.message);
    }else{
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }

    return new ErrorObservable('Error occurred, try again later.');
  }
}