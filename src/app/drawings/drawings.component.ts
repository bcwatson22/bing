import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, PlatformLocation } from '@angular/common';
import { UtilsService } from './../_data/services/utils.service';
import { StaticContentService } from './../_data/services/static-content.service';
import { ModalAnimation } from './../_animations/modal';

@Component({
  selector: 'drawings',
  templateUrl: './drawings.component.html',
  styleUrls: ['./drawings.component.scss'],
  providers: [
    StaticContentService
  ],
  animations: [
    ModalAnimation
  ]
})

export class DrawingsComponent implements OnInit {

  title = 'Drawings';

  private drawings;
  private unsorted;
  private portraits;

  private activatedPortrait;
  private modalState;

  private latLong;

  private coordinates: any;

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

        this.showPortrait(portraitParam, true, false);

      } else {

        this.modalClose(false);

      }

     });

  }

  ngOnInit() {

    this.drawings = this.utils.bindData('drawings');
    this.unsorted = this.utils.filterPortraits('material', 'Chalk');
    // this.portraits = this.sortPortraits();

    this.portraits = this.utils.shufflePortraits(this.unsorted);

    let portraitParam = this.utils.getRouteParam();

    if (portraitParam) {

      this.showPortrait(portraitParam, false, false);

    }

  }

  showPortrait(id: string, animate: boolean, clickEvent: any): void {

    this.activatedPortrait = this.utils.activatePortraitData(this.portraits, id);

    this.modalState = this.utils.portraitLaunchUrl('drawings', id, animate, clickEvent);

    if (clickEvent) {

      this.latLong = this.utils.getPortraitCoordinates(clickEvent);

    }

  }

  modalClose(history: boolean): void {

    this.modalState = null;

    if (history) {

      this.utils.portraitCloseUrl('drawings');

    }

  }

}
