import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, PlatformLocation } from '@angular/common';
import { UtilsService } from './../_data/services/utils.service';
import { StaticContentService } from './../_data/services/static-content.service';
import { ModalAnimation } from './../_animations/modal';
import { SharedService } from './../_data/services/shared.service';

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

  public home: any;
  public unsorted: any;
  public portraits: any;

  public activatedPortrait: any;
  public modalState: string;

  public latLong: any;
  public sub: any;

  constructor(
    private location: Location,
    private platform: PlatformLocation,
    private router: Router,
    private utils: UtilsService,
    private shared: SharedService
  ) {

    utils.getStaticContent('home');
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

    this.sub = this.shared.currentState.subscribe(
      (val) => {
        if (val === 'portraits') {
          this.unsorted = this.utils.filterPortraits('home', true, false);
          this.portraits = this.sortPortraits();

          let portraitParam = this.utils.getRouteParam();
          if (portraitParam) this.showPortrait({id: portraitParam, animate: false, clickEvent: false});
        }
        if (val === 'content') {
          this.home = this.utils.bindStaticData('home');
        }
      }
    );

  }

  ngOnDestroy() {

    this.sub.unsubscribe();

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

    this.modalState = this.utils.portraitLaunchUrl('home', $event.id, $event.animate, $event.clickEvent);

    this.utils.updateMetaData(this.activatedPortrait);

    if ($event.clickEvent) {

      this.latLong = this.utils.getElementCoordinates($event.clickEvent, true);

    }

  }

  modalClose(history: boolean): void {

    this.modalState = null;
    this.activatedPortrait = null;

    this.utils.updateMetaData('home');

    if (history) {

      this.utils.portraitCloseUrl('home');

    }

  }

}
