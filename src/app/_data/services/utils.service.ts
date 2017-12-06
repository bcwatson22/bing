import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PortraitService } from './portrait.service';
import { StaticContentService } from './static-content.service';
import { Coordinates } from './../models/coordinates';

@Injectable()

export class UtilsService {

  private rawStatic;
  private staticData;

  // private rawPortraits;
  private portraitData;

  // private coordinates: Coordinates = new Coordinates();

  constructor(
    private router: Router,
    private location: Location,
    private portraitService: PortraitService,
    private staticService: StaticContentService
  ) {
  }

  // getUserData(): void {
  //
  //   this.userDataService.getUserData().subscribe(
  //     (val) => {
  //       this.userData = val;
  //     },
  //     (err) => console.log(err),
  //     () => {
  //       this.getTargetData(1);
  //     }
  //   );
  //
  // }

  getStaticContent(): void {

    this.staticService.getStaticContent().then(
      (val) => {
        this.rawStatic = val;
        this.staticData = this.rawStatic[0];
      }
    );

  }

  getPortraits(): void {

    this.portraitService.getPortraits().then(
      (val) => {
        this.portraitData = val;
        // this.portraitData = this.rawPortraits[0];
      }
    );

  }

  bindData(key: any): any {

    let binding;

    binding = this.staticData[key];

    return binding;

  }

  bindPortraits(): any {

    // let binding;
    //
    // binding = this.portraitData[key];

    return this.portraitData;

  }

  filterPortraits(key: string, value: any): any {

    let pictures = this.portraitData.filter(o => o[key] === value);

    return pictures;

  }

  shufflePortraits(collection: any): any {

    let pictures = collection.sort(() => Math.random() - 0.5);

    return pictures;

  }

  getRouteParam(): string {

    let urlPath = this.location.path().substr(1);
    let parameter;

    if (urlPath.indexOf('/') >= 0) {

      parameter = urlPath.substring(urlPath.lastIndexOf('/') + 1, urlPath.length);

    }

    return parameter;

  }

  matchBaseRoute(current: string, target: string): any {

    current = current.indexOf('/') >= 0 ? current.substring(0, current.indexOf('/')) : current;
    target = target.indexOf('/') >= 0 ? target.substring(0, target.indexOf('/')) : target;

    if (current === target) {

      return true;

    } else {

      return false;

    }

  }

  activatePortraitData(collection: any, id: string): any {

    let targetPortrait = collection.find(o => o.id == id);

    return targetPortrait;

  }

  getElementCoordinates(target: any, click: boolean): any {

    let coordinates: Coordinates = new Coordinates();

    let element = (click === true) ? target.currentTarget : target;

    if (element) {

      let width = element.offsetWidth,
          height = element.offsetHeight,
          offset = element.getBoundingClientRect(),
          top = offset.top,
          left = offset.left;

      coordinates.width = width;
      coordinates.height = height;
      coordinates.top = top;
      coordinates.left = left;

    }

    return coordinates;

  }

  portraitLaunchUrl(baseUrl: string, id: string, animate: boolean, clickEvent: any): string {

    let url = this.router.createUrlTree(['/' + baseUrl, id]).toString();

    if (animate) {

      if (clickEvent) {

        this.location.go(url);

      }

      return 'animate';

    } else {

      this.location.replaceState(url);

      return 'active';

    }

  }

  portraitCloseUrl(base: string): void {

    let url = this.router.createUrlTree(['/' + base]).toString();

    this.location.go(url);

  }

  getHomeClasses(i: number): string {

    let styleClass;

    switch (i) {

      case 0:
        styleClass = 'half';
        break;

      case 1:
      case 2:
      case 3:
      case 4:
        styleClass = 'stacked';
        break;

      case 6:
      case 7:
      case 8:
        styleClass = 'quarter';
        break;

      case 10:
      case 11:
      case 12:
        styleClass = 'third';
        break;

    }

    return styleClass;

  }

  getThumbClasses(i: number): string {

    i += 1;

    let styleClass;

    switch (i) {

      case 1:
      case 9:
        styleClass = 'half';
        break;

      case 2:
      case 3:
      case 4:
      case 5:
      case 10:
      case 11:
      case 12:
      case 13:
        styleClass = 'stacked';
        break;

      case 6:
      case 7:
      case 8:
      case 14:
      case 15:
      case 16:
        styleClass = 'third';
        break;

      // case 10:
      // case 11:
      // case 12:
      //   styleClass = 'third';
      //   break;

    }

    return styleClass;

  }

}
