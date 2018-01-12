import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location, PlatformLocation } from '@angular/common';
import { UtilsService } from './../_data/services/utils.service';
import { StaticContentService } from './../_data/services/static-content.service';
import { ModalAnimation } from './../_animations/modal';
import { SharedService } from './../_data/services/shared.service';

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

  public drawings: any;
  public unsorted: any;
  public shuffled: any;
  public landscape: any;
  public portrait: any;
  public portraits: any;

  public activatedPortrait: any;
  public modalState: string;

  public latLong: any;
  public widgetTop: number;
  public widgetLeft: number;
  public sub: any;

  constructor(
    private location: Location,
    private platform: PlatformLocation,
    private router: Router,
    private utils: UtilsService,
    private shared: SharedService
  ) {

    utils.getStaticContent('drawings');
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

    // this.drawings = this.utils.bindStaticData('drawings');

    this.sub = this.shared.currentState.subscribe(
      (val) => {
        console.log('drawings - ' + val);
        if (val === 'portraits') {
          // this.unsorted = this.utils.filterPortraits('home', true, false);
          // this.portraits = this.sortPortraits();

          this.unsorted = this.utils.filterPortraits('type', 'drawing', false);

          this.shuffled = this.utils.shufflePortraits(this.unsorted);
          this.landscape = this.utils.filterPortraits('orientation', 'landscape', this.shuffled);
          this.portrait = this.utils.filterPortraits('orientation', 'portrait', this.shuffled);

          this.portraits = this.utils.insertLandscapes(this.portrait, this.landscape);
        }
        if (val === 'content') {
          this.drawings = this.utils.bindStaticData('drawings');
        }
      }
    );

    // this.unsorted = this.utils.filterPortraits('type', 'drawing', false);
    //
    // this.shuffled = this.utils.shufflePortraits(this.unsorted);
    // this.landscape = this.utils.filterPortraits('orientation', 'landscape', this.shuffled);
    // this.portrait = this.utils.filterPortraits('orientation', 'portrait', this.shuffled);
    //
    // this.portraits = this.utils.insertLandscapes(this.portrait, this.landscape);

    let portraitParam = this.utils.getRouteParam();

    if (portraitParam) {

      this.showPortrait({id: portraitParam, animate: false, clickEvent: false});

    }

  }

  ngOnDestroy() {

    this.sub.unsubscribe();

  }

  showPortrait($event): void {

    this.activatedPortrait = this.utils.activatePortraitData(this.portraits, $event.id);

    this.modalState = this.utils.portraitLaunchUrl('drawings', $event.id, $event.animate, $event.clickEvent);

    this.utils.updateMetaData(this.activatedPortrait);

    if ($event.clickEvent) {

      this.latLong = this.utils.getElementCoordinates($event.clickEvent, true);

    }

  }

  modalClose(history: boolean): void {

    this.modalState = null;
    this.activatedPortrait = null;

    this.utils.updateMetaData('drawings');

    if (history) {

      this.utils.portraitCloseUrl('drawings');

    }

  }

}
