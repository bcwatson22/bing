import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UtilsService } from './../../_data/services/utils.service';

@Component({
  selector: 'thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})

export class ThumbnailComponent implements OnInit {

  @Input() portrait: any;
  @Input() blockquote: any;
  @Output() showPortrait = new EventEmitter<any>();

  constructor(
    public utils: UtilsService
  ) { }

  ngOnInit() {

  }

  launchModal(id: string, animate: boolean, clickEvent: any): void {

    this.showPortrait.emit({id, animate, clickEvent});

  }

}
