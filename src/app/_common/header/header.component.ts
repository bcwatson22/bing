import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'page-head',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  @Input() public title: string;

  constructor() { }

  ngOnInit() {
  }

}
