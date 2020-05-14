import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-foot',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public currentYear: string;

  constructor() { }

  ngOnInit() {
    this.currentYear = new Date().getFullYear().toString()
  }

}
