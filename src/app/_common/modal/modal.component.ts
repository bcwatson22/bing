import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {

  @Input() data: any;
  @Output() modalClose = new EventEmitter<any>();

  constructor() {  }

  ngOnInit(): void {

  }

  closeModal(activeBill: any): void {

    this.modalClose.emit(activeBill);

  }

}
