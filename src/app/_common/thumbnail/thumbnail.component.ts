import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})

export class ThumbnailComponent implements OnInit {

  @Input() portrait: any;
  @Input() blockquote: any;
  @Output() showPortrait = new EventEmitter<any>();

  public images = `assets/images/pictures/drawing/will-cowling-1200.jpg 1200w,
      assets/images/pictures/drawing/will-cowling-600.jpg 600w,
      assets/images/pictures/drawing/will-cowling-300.jpg 300w`;

  constructor() { }

  ngOnInit() {

  }

  getSrcSet(portrait: any): string {

    let string;

    if (portrait.orientation === 'landscape') {

      string = `assets/images/pictures/${portrait.type}/${portrait.id}-2400.jpg 2400w,
                assets/images/pictures/${portrait.type}/${portrait.id}-1200.jpg 1200w,
                assets/images/pictures/${portrait.type}/${portrait.id}-600.jpg 600w`;
      
    } else {

      string = `assets/images/pictures/${portrait.type}/${portrait.id}-1200.jpg 1200w,
                assets/images/pictures/${portrait.type}/${portrait.id}-600.jpg 600w,
                assets/images/pictures/${portrait.type}/${portrait.id}-300.jpg 300w`;

    }

    return string;

  }

  launchModal(id: string, animate: boolean, clickEvent: any): void {

    this.showPortrait.emit({id, animate, clickEvent});

  }

}
