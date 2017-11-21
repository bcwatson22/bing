import { Component, OnInit } from '@angular/core';
import { ModalComponent } from './../modal.component';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})

export class OverviewComponent extends ModalComponent {

  constructor() {
    super();
  }

  ngOnInit() {

  }

}
