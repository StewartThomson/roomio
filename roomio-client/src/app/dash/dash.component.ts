import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbbackendService } from '../services/dbbackend.service';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  constructor(private roomservice: RoomService, private router: Router, private dbbackendservice: DbbackendService) { }

  mate = this.dbbackendservice.returnUser();
  mates = this.roomservice.allMateNames();
  
  ngOnInit() {
  }

}
