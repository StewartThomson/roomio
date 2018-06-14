import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { DbbackendService, Mate, Transaction } from '../services/dbbackend.service';

export interface Room{
  _id: string;
  name: string;
  balances: Array<{aid: string, bid: string, aname: string, bname: string, owed: number}>;
  admin: genericId;
  recentlyAdded: genericId;
  count: number;
  key: string;
}

export interface genericId{
  id: string,
  name: string
}

export class genericId implements genericId{
}

export class Room implements Room{
  admin = new genericId();
  recentlyAdded = new genericId();
}

@Injectable()
export class RoomService {
  @Output() changeRoom: EventEmitter<Room> = new EventEmitter();

  private url = 'http://localhost:80/api';
  private currentRoom: Room = null;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private dbbackendservice: DbbackendService) { }

  returnRoom(){
    return this.currentRoom;
  }

  async createRoom(name: string, creator: Mate){
    let thisUrl = this.url + '/room/create';
    
    let room: Room = new Room();
    room.name = name;
    room.admin.id = creator._id;
    room.admin.name = creator.name;

    let result = await new Promise((resolve, reject) => { 
      this.http.post<Room>(thisUrl, room, this.httpOptions)
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
      ).subscribe(room => {this.currentRoom = room as Room; resolve('success')});
    });

    if(result){
      this.changeRoom.emit(this.currentRoom);
      return this.currentRoom;
    }else{
      throw 'Unable to load room';
    }
  }

  async joinRoom(id: string, name: string, key: string){
    let thisUrl = this.url + '/joinRoom';
    let userId = this.dbbackendservice.returnUserId();

    let info: any;

    info.id = id;
    info.name = name;
    info.roomKey = key;

    let result = await new Promise((resolve, reject) => {
      this.http.post<Room>(thisUrl, info, this.httpOptions)
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

  async inviteMate(email: string){
    let thisUrl = this.url + '/userMgmt/invite';

    let info: any = {email: '', inviter: '', room: '', roomKey: ''};
    info.email = email;
    info.inviter = this.dbbackendservice.returnUserName();
    info.room = this.currentRoom.name;
    info.roomKey = this.currentRoom.key;

    let result = await new Promise((resolve, reject) => {
      this.http.post<JSON>(thisUrl, info, this.httpOptions)
      .pipe(
        retry(3),
        catchError((res) => this.dbbackendservice.handleError(res))
      ).subscribe(json => resolve(json));
    });
  }

  async sendMoney(roomid: string, toid: string, amount: number, reason: string){
    let thisUrl = this.url + '/transaction/create';

    let transaction: Transaction = new Transaction();
    transaction.amount = amount;
    transaction.roomid = roomid;
    transaction.toid = toid;
    transaction.fromid = this.dbbackendservice.returnUserId();
    transaction.title = reason;

    let result = await new Promise((resolve, reject) => {
      this.http.post<Transaction>(thisUrl, transaction, this.httpOptions)
      .pipe(
        retry(3),
        catchError((res) => this.dbbackendservice.handleError(res))
      ).subscribe(transaction => resolve(transaction));
    });

    if(result){
      this.loadRoom(this.currentRoom._id);
    }
  }
}
