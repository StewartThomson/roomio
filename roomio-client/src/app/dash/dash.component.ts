import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbbackendService, Mate } from '../services/dbbackend.service';
import { RoomService, Room } from '../services/room.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EmailValidator } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  constructor(private modalService: NgbModal, private roomservice: RoomService, private router: Router, 
    private dbbackendservice: DbbackendService, private formBuilder: FormBuilder) { }

  mate: Mate = this.dbbackendservice.returnUser();
  mates: Array<Mate>;
  form: FormGroup;

  ngOnInit() {
    if(this.mate.rooms.length > 0){
      this.mates = this.roomservice.allMateNames();
    }
    this.form = this.formBuilder.group({
      roomName: [null, [Validators.required]]
    });
  }

  createRoomModal(content){
    this.modalService.open(content, {centered: true});
  }

  createRoom(){
    let name = this.form.value.roomName.trim();
    let admin = this.mate._id;

    this.roomservice.createRoom(name, admin);
  }
}
