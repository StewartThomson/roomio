import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { DbbackendService, Mate } from '../services/dbbackend.service';

export interface Room{
  _id: string;
  name: string;
  balances: [{aid: string, bid: string, owed: number}];
  admin: string;
  recentlyAdded: string;
  count: number;
  key: string;
}

export class Room implements Room{}

@Injectable()
export class RoomService {
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

    await this.http.post<Room>(thisUrl, room, httpOptions)
    .pipe(
      retry(3),
      catchError((res) => this.dbbackendservice.handleError(res)),
    ).subscribe(room => {this.currentRoom = room;});

    if(this.currentRoom){
      return 'Room created';
    }else{
      throw 'Unable to create room';
    }
  }

  async loadRoom(id: string){
    let thisUrl = this.url + '/room/' + id;

    await this.http.get<Room>(thisUrl)
      .pipe(
        retry(3),
        catchError((res) => this.dbbackendservice.handleError(res))
      ).subscribe(room => {this.currentRoom = room;});

    if(this.currentRoom){
      return 'Room loaded';
    }else{
      throw 'Unable to load room';
    }
  }

  allMateNames(){
    let uniqueSet = new Set(this.currentRoom.balances.map(item => item.aid)) //all a names
    let bids = this.currentRoom.balances.map(item => item.bid);
    for(let id of bids){
      uniqueSet.add(id);
    }
    uniqueSet.delete(this.dbbackendservice.returnUserId());
    let mates: Array<Mate>;
    for(let id of Array.from(uniqueSet).sort()){
      this.dbbackendservice.getMate(id).then(res => {
        if(res){
          mates.push(<Mate>res);
        }
      }).catch();
    }
    return mates;
  }

}
