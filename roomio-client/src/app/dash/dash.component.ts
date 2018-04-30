import { Component, OnInit, HostListener, EventEmitter, Output } from '@angular/core';
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
  form: FormGroup;
  joinForm: FormGroup;
  selectedRoomId;

  ngOnInit() {
    this.dbbackendservice.trackMate.subscribe(currentMate => {
      this.mate = currentMate;
    });

    this.form = this.formBuilder.group({
      roomName: [null, [Validators.required]]
    });

    this.joinForm = this.formBuilder.group({
      roomKey: [null, [Validators.required]]
    });
  }

  createRoomModal(content){
    this.modalService.open(content, {centered: true});
  }

  createRoom(){
    let name = this.form.value.roomName.trim();
    let admin = new Mate();
    admin._id = this.mate._id;
    admin.name = this.mate.name;

    this.roomservice.createRoom(name, admin).then(() => {
      this.dbbackendservice.getMate(this.mate._id) //Just updates the user's info
    });
  }

  @HostListener('switch')
  selectRoom(){
    this.roomservice.loadRoom(this.selectedRoomId).catch(err => console.log(err));
  }

  joinRoom(){
    let key = this.joinForm.value.roomKey.trim();
    let userid = this.mate._id;
    let name = this.mate.name;

    this.roomservice.joinRoom(userid, name, key);
  }
}
