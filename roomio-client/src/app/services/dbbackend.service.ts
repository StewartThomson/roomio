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

class MateFrame{
  name: string;
  email: string;
}

@Injectable()
export class DbbackendService {
  private url = 'http://localhost:3000/api';
  private currentUser: Mate = null;

  constructor(private http: HttpClient) { }

  async createMate(name: string, email: string){
    let thisUrl = this.url + '/mate/create';
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let user = new MateFrame();
    user.name = name;
    user.email = email;

    //let attemptCreation = new Promise((resolve, reject) => {
    await this.http.post<Mate>(thisUrl, user, httpOptions)
    .pipe(
      retry(3),
      catchError((res) => this.handleError(res)),
    ).subscribe(mate => {this.currentUser = mate;});
    //});

    /*attemptCreation.then((res) => {
      return 'success';
    })*/

    if(this.currentUser != null){
      return 'Mate created';
    }else{
      throw 'Unable to create mate';
    }

  }

  getMate(id: string){
    let thisUrl = this.url + '/mate/' + id;

    return this.http.get<Mate>(thisUrl)
      .pipe(
        catchError((res) => this.handleError(res))
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
      console.error(`Backend returned code ${error.status}, body was: ${JSON.stringify(error.error)}`);
    }

    return new ErrorObservable('Error occurred, try again later.');
  }
}