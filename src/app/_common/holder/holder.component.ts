import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'holder',
  templateUrl: './holder.component.html',
  styleUrls: ['./holder.component.scss']
})

export class HolderComponent implements OnInit {

  @Input() portrait: any;
  @Input() blockquote: any;
  @Output() showPortrait = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

  }

  launchModal(id: string, animate: boolean, clickEvent: any): void {

    this.showPortrait.emit({id, animate, clickEvent});

  }

}
