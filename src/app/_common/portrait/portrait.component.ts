import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.scss']
})

export class PortraitComponent implements OnInit {

  @Input() data: any;

  constructor() {  }

  ngOnInit(): void {

  }

}
