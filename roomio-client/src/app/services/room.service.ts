import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { DbbackendService, Mate } from '../services/dbbackend.service';

export interface Room{
  _id: string;
  name: string;
  balances: Array<{aid: string, bid: string, aname: string, bname: string, owed: number}>;
  admin: string;
  recentlyAdded: string;
  count: number;
  key: string;
}

export class Room implements Room{}

@Injectable()
export class RoomService {
  @Output() changeRoom: EventEmitter<Room> = new EventEmitter();

  private url = 'http://localhost:3000/api';
  private currentRoom: Room = null;

  constructor(private http: HttpClient, private dbbackendservice: DbbackendService) { }

  returnRoom(){
    return this.currentRoom;
  }

  async createRoom(name: string, creator: string){
    let thisUrl = this.url + '/room/create';
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let room: Room = new Room();
    room.name = name;
    room.admin = creator;

    let result = await new Promise((resolve, reject) => { 
      this.http.post<Room>(thisUrl, room, httpOptions)
      .pipe(
        retry(3),
        catchError((res) => this.dbbackendservice.handleError(res)),
      ).subscribe(room => {resolve('Room created')});
    });

    if(result){
      return 'Room created';
    }else{
      throw 'Unable to create room';
    }
  }

  async loadRoom(id: string){
    let thisUrl = this.url + '/room/' + id;

    let result = await new Promise((resolve, reject) => { 
      this.http.get<Room>(thisUrl)
      .pipe(
        retry(3),
        catchError((res) => this.dbbackendservice.handleError(res))
      ).subscribe(room => {this.currentRoom = room; resolve('success')});
    });

    if(result){
      this.changeRoom.emit(this.currentRoom);
      return this.currentRoom;
    }else{
      throw 'Unable to load room';
    }
  }

  async joinRoom(id: string, key: string){
    let thisUrl = this.url + '/joinRoom/' + key + '/' + id;
    let userId = this.dbbackendservice.returnUserId();
    let result = await new Promise((resolve, reject) => {
      this.http.get<Room>(thisUrl)
      .pipe(
        retry(3),
        catchError((res) => this.dbbackendservice.handleError(res))
      ).subscribe(room => { this.dbbackendservice.getMate(userId)}); // refresh user's rooms
    });

    if(result){
      return 'Room joined';
    }else{
      throw 'Unable to join room';
    }
  }

  allMates(){
    let balances = new Array();
    let userId = this.dbbackendservice.returnUserId();
    for(let balance of this.currentRoom.balances){
      if(balance.aid == userId){
        balances.push({_id: balance.bid, name: balance.bname, owed: balance.owed});
      }else if(balance.bid == userId){
        balances.push({_id: balance.aid, name: balance.aname, owed: -balance.owed});
      }
    }

    return balances;
  }

}
