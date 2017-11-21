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

  private coordinates: any;

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

    let portraitParam = this.utils.getRouteParam();

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

  // activatePortraitData(id: string): any {
  //
  //   let targetPortrait = this.portraits.find(o => o.id == id);
  //
  //   return targetPortrait;
  //
  // }
  //
  // pushHistory(baseUrl: string, id: string, animate: boolean, clickEvent: any): string {
  //
  //   let url = this.router.createUrlTree(['/home', id]).toString();
  //
  //   if (animate) {
  //
  //     // this.modalState = 'animate';
  //
  //     if (clickEvent) {
  //
  //       this.getPortraitCoordinates(clickEvent);
  //       this.location.go(url);
  //
  //     }
  //
  //     return 'animate';
  //
  //   } else {
  //
  //     // this.modalState = 'active';
  //     this.location.replaceState(url);
  //
  //     return 'active';
  //
  //   }
  //
  // }

  showPortrait($event): void {

    // let targetPortrait = this.portraits.find(o => o.id == id);
    // let url = this.router.createUrlTree(['/home', id]).toString();

    this.activatedPortrait = this.utils.activatePortraitData(this.portraits, $event.id);

    this.modalState = this.utils.portraitLaunchUrl('home', $event.id, $event.animate, $event.clickEvent);

    if ($event.clickEvent) {

      this.latLong = this.utils.getPortraitCoordinates($event.clickEvent);

    }

    // if (animate) {
    //
    //   this.modalState = 'animate';
    //
    //   if (clickEvent) {
    //
    //     this.getPortraitCoordinates(clickEvent);
    //     this.location.go(url);
    //
    //   }
    //
    // } else {
    //
    //   this.modalState = 'active';
    //   this.location.replaceState(url);
    //
    // }

  }

  // getPortraitCoordinates(event: any): void {
  //
  //   let widget = event.currentTarget,
  //       width = widget.offsetWidth,
  //       height = widget.offsetHeight,
  //       offset = widget.getBoundingClientRect(),
  //       top = offset.top + (height / 2),
  //       left = offset.left + (width / 2);
  //
  //   this.widgetTop = top + 'px';
  //   this.widgetLeft = left + 'px';
  //
  // }

  modalClose(history: boolean): void {

    this.modalState = null;
    // this.activatedPortrait = null;

    if (history) {

      this.utils.portraitCloseUrl('home');

      // let url = this.router.createUrlTree(['/home']).toString();
      //
      // this.location.go(url);

    }

  }

}
