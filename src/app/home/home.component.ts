import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, PlatformLocation } from '@angular/common';
import { UtilsService } from './../_data/services/utils.service';
import { StaticContentService } from './../_data/services/static-content.service';
import { ModalAnimation } from './../_animations/modal';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    StaticContentService
  ],
  animations: [
    ModalAnimation
  ]
})

export class HomeComponent implements OnInit {

  title = 'Home';

  private home;
  private unsorted;
  private portraits;

  private activatedPortrait;
  private modalState;

  private latLong;

  // private coordinates: any;

  // coordinates.top = '50%';

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

    this.home = this.utils.bindData('home');
    this.unsorted = this.utils.filterPortraits('home', true);
    this.portraits = this.sortPortraits();

    // this.activatedPortrait = this.portraits[0];

    let portraitParam = this.utils.getRouteParam();

    // console.log(this.portraits);

    if (portraitParam) {

      this.showPortrait({id: portraitParam, animate: false, clickEvent: false});

    }

  }

  sortPortraits(): any {

    let portraits = this.unsorted;

    portraits.sort(function(a, b) {
      return a.position - b.position;
    });

    return portraits;

  }

  showPortrait($event): void {

    this.activatedPortrait = this.utils.activatePortraitData(this.portraits, $event.id);

    console.log(this.activatedPortrait.description);

    this.modalState = this.utils.portraitLaunchUrl('home', $event.id, $event.animate, $event.clickEvent);

    if ($event.clickEvent) {

      this.latLong = this.utils.getElementCoordinates($event.clickEvent, true);

    }

  }

  modalClose(history: boolean): void {

    this.modalState = null;
    // this.activatedPortrait.description = this.activatedPortrait.description;

    if (history) {

      this.utils.portraitCloseUrl('home');

    }

  }

  modalDone(): void {

    // this.activatedPortrait = {};
    // this.activatedPortrait.description = [];

  }

}
