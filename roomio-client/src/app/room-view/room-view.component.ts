import {Component, OnInit, ViewChild} from '@angular/core';
import {RoomService, Room} from '../services/room.service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-room-view',
  templateUrl: './room-view.component.html',
  styleUrls: ['./room-view.component.css'],
  host: {'class': 'room-view'}
})

export class RoomViewComponent implements OnInit {
  Math: any = Math;
  @ViewChild('confirmationModal') confirmationModal;
  room: Room;
  mates: Array<any>;
  selectedMate: any = null;
  selectedMateId: string = null;
  selectedMateIndex: number;
  emailInviteForm: FormGroup;
  sendMoneyForm: FormGroup;

  constructor(private roomService: RoomService, private modalService: NgbModal, private formBuilder: FormBuilder) {
  }

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

  createRoomModal(content, options: any = {}) {
    options.centered = true;
    this.modalService.open(content, options);
  }

  selectMate() {
    this.selectedMateIndex = this.mates.findIndex(item => item._id == this.selectedMateId);
    this.selectedMate = this.mates[this.selectedMateIndex];
  }

  inviteMate() {
    this.roomService.inviteMate(this.emailInviteForm.value.emailInvite.trim());
  }

  sendMoney() {
    let toid = this.selectedMateId;
    let roomid = this.room._id;
    let amount = this.sendMoneyForm.value.amount;
    let reason = this.sendMoneyForm.value.moneyReason;

    this.roomService.sendMoney(roomid, toid, amount, reason).then(() => {
      let modalRef: NgbModalRef = this.modalService.open(this.confirmationModal, {centered: true, windowClass: "confirmation-modal"});
      setTimeout(() => modalRef.close(), 1000);
    });
  }

  resetFields() {
    this.sendMoneyForm.reset();
  }

  forceTwoDecimal(){
    let val: number = this.sendMoneyForm.get('amount').value;
    val = Number(val.toFixed(2));
    this.sendMoneyForm.patchValue({amount: val});
  }
}
