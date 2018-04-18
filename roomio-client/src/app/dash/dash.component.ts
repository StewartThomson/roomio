import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbbackendService, Mate } from '../services/dbbackend.service';
import { RoomService, Room } from '../services/room.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  constructor(private modalService: NgbModal, private roomservice: RoomService, private router: Router, private dbbackendservice: DbbackendService) { }

  mate: Mate = this.dbbackendservice.returnUser();
  mates: Array<Mate>;

  ngOnInit() {
    if(this.mate.rooms.length > 0){
      this.mates = this.roomservice.allMateNames();
    }
  }

  createRoomModal(content){
    this.modalService.open(content, {centered: true});
  }
}
