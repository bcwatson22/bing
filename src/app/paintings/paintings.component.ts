import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, PlatformLocation } from '@angular/common';
import { UtilsService } from './../_data/services/utils.service';
import { StaticContentService } from './../_data/services/static-content.service';
import { ModalAnimation } from './../_animations/modal';

@Component({
  selector: 'paintings',
  templateUrl: './paintings.component.html',
  styleUrls: ['./paintings.component.scss'],
  providers: [
    StaticContentService
  ],
  animations: [
    ModalAnimation
  ]
})

export class PaintingsComponent implements OnInit {

  title = 'Paintings';

  public paintings;
  public unsorted;
  public shuffled;
  public landscape;
  public portrait;
  public portraits;

  public activatedPortrait;
  public modalState;

  public latLong;
  public widgetTop;
  public widgetLeft;

  constructor(
    private location: Location,
    private platform: PlatformLocation,
    private router: Router,
    private utils: UtilsService
  ) {

    utils.getStaticContent();
    utils.getPortraits();

    platform.onPopState((e) => {

      let portraitParam = utils.getRouteParam();

      if (portraitParam) {

        this.showPortrait({id: portraitParam, animate: true, clickEvent: false});

      } else {

        this.modalClose(false);

      }

     });

  }

  ngOnInit() {

    this.paintings = this.utils.bindData('paintings');
    this.unsorted = this.utils.filterPortraits('type', 'painting', false);

    this.shuffled = this.utils.shufflePortraits(this.unsorted);
    this.landscape = this.utils.filterPortraits('orientation', 'landscape', this.shuffled);
    this.portrait = this.utils.filterPortraits('orientation', 'portrait', this.shuffled);

    this.portraits = this.utils.insertLandscapes(this.portrait, this.landscape);

    let portraitParam = this.utils.getRouteParam();

    if (portraitParam) {

      this.showPortrait({id: portraitParam, animate: false, clickEvent: false});

    }

  }

  showPortrait($event): void {

    this.activatedPortrait = this.utils.activatePortraitData(this.portraits, $event.id);

    this.modalState = this.utils.portraitLaunchUrl('paintings', $event.id, $event.animate, $event.clickEvent);

    if ($event.clickEvent) {

      this.latLong = this.utils.getElementCoordinates($event.clickEvent, true);

    }

  }

  modalClose(history: boolean): void {

    this.modalState = null;
    this.activatedPortrait = null;

    if (history) {

      this.utils.portraitCloseUrl('paintings');

    }

  }

}
