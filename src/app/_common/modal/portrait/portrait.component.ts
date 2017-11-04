import { Component, OnInit } from '@angular/core';
import { ModalComponent } from './../modal.component';

@Component({
  selector: 'portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.scss']
})

export class PortraitComponent extends ModalComponent {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
