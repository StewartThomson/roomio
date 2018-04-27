import { Component, OnInit } from '@angular/core';
import { DbbackendService, Mate } from '../services/dbbackend.service';
import { RoomService, Room } from '../services/room.service';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.css']
})
export class RoomViewComponent implements OnInit {
  room: Room;
  mates: Array<any>;

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.roomService.changeRoom.subscribe(currentRoom => {
      this.room = currentRoom;
    });
  }

}
