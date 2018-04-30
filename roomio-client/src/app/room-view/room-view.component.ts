import { Component, OnInit } from '@angular/core';
import { DbbackendService, Mate } from '../services/dbbackend.service';
import { RoomService, Room } from '../services/room.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { EmailValidator } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.css']
})
export class RoomViewComponent implements OnInit {
  room: Room;
  mates: Array<any>;
  selectedMate: any = null;
  selectedMateId: string = null;
  selectedMateIndex: number;
  emailInviteForm: FormGroup;
  sendMoneyForm: FormGroup;

  constructor(private roomService: RoomService, private modalService: NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.roomService.changeRoom.subscribe(currentRoom => {
      this.room = currentRoom;
      this.mates = this.roomService.allMates();
    });

    this.emailInviteForm = this.formBuilder.group({
      emailInvite: [null, [Validators.required, Validators.email]]
    });

    this.sendMoneyForm = this.formBuilder.group({
      amount: [null, [Validators.required]],
      moneyReason: [null, [Validators.required]]
    });
  }

  createRoomModal(content){
    this.modalService.open(content, {centered: true});
  }

  selectMate(){
    this.selectedMateIndex = this.mates.findIndex(item => item._id == this.selectedMateId);
    this.selectedMate = this.mates[this.selectedMateIndex];
  }

  inviteMate(){
    this.roomService.inviteMate(this.emailInviteForm.value.emailInvite.trim());
  }

  sendMoney(){
    let toid = this.selectedMateId;
    let roomid = this.room._id;
    let amount = this.sendMoneyForm.value.amount;
    let reason = this.sendMoneyForm.value.moneyReason;

    this.roomService.sendMoney(roomid, toid, amount, reason);
  }
}
