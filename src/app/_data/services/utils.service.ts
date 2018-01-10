import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
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
    private staticService: StaticContentService,
    private meta: Meta,
    private title: Title
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

  getStaticContent(key: string): void {

    this.staticService.getStaticContent().then(
      (val) => {
        this.rawStatic = val;
        this.staticData = this.rawStatic[0];
        this.updateMetaData(key);
      }
    );

  }

  updateMetaData(targetData: any): void {

    if (typeof(targetData) === 'string') {

      let data = this.staticData[targetData],
          description = data.description;

      this.title.setTitle(data.title);
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ name: 'twitter:description', content: description });
      this.meta.updateTag({ property: 'og:description', content: description });

    } else {

      let subject = targetData.subject,
          description = subject + ' portrait by Bing Jones. ' + targetData.material + '.';

      this.title.setTitle(subject + ' | Bing Jones Portraits');
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ name: 'twitter:description', content: description });
      this.meta.updateTag({ property: 'og:description', content: description });

    }

  }

  getPortraits(): void {

    this.portraitService.getPortraits().then(
      (val) => {
        this.portraitData = val;
        // this.portraitData = this.rawPortraits[0];
      }
    );

  }

  bindStaticData(key: any): any {

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

  filterPortraits(key: string, value: any, array: any): any {

    let collection = (array) ? array : this.portraitData;

    let pictures = collection.filter(o => o[key] === value);

    return pictures;

  }

  shufflePortraits(collection: any): any {

    let pictures = collection.sort(() => Math.random() - 0.5);

    return pictures;

  }

  insertLandscapes(portraitArray: any, landscapeArray: any): any {

    let pictures = portraitArray;

    if (landscapeArray) {

      for (let i = 0; i < landscapeArray.length; i++) {

          let sixth = (i * 18) + 8;

          pictures.splice(sixth, 0, landscapeArray[i]);

      }

    }

    // for (let i = 0; i < landscapeArray.length; i++) {
    //
    //     let sixth = (i * 18) + 5;
    //
    //     pictures.splice(sixth, 0, landscapeArray[i]);
    //
    // }

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

    i += 1;

    let styleClass;

    switch (i) {

      case 1:
        styleClass = 'half';
        break;

      case 2:
      case 3:
      case 4:
      case 5:
        styleClass = 'stacked';
        break;

      case 6:
      case 7:
      case 8:
        styleClass = 'third';
        break;

      case 10:
      case 11:
      case 12:
      case 13:
        styleClass = 'quarter';
        break;

      default:
        styleClass = '';
        break;

    }

    return styleClass;

  }

  getThumbClasses(i: number, landscapeCollection: any, fullCollection: any, orientation: string, quote: any): string {

    i += 1;

    let j = i,
        styleClass;

    i = (i + 18) % 18;

    switch (i) {

      case 1:
        styleClass = 'half clear';
        break;

      case 2:
      case 3:
      case 4:
      case 5:
      case 15:
      case 17:
      case 0:
        styleClass = 'stacked';
        break;

      case 6:
      case 7:
      case 8:
        styleClass = 'third';
        break;

      case 9:
        styleClass = 'landscape';
        break;

      case 10:
      case 11:
      case 12:
      case 13:
        styleClass = 'quarter';
        break;

      case 14:
        styleClass = 'half right';
        break;

      case 16:
        styleClass = 'stacked second';
        break;

      default:
        styleClass = 'quarter';
        break;

    }

    if (orientation === 'landscape' && !quote) styleClass += ' wide';

    let multiple = Math.ceil(j / 18);

    if (landscapeCollection.length < multiple) {

      if (i === 9) styleClass = 'none';

    }

    return styleClass;

  }

  getQuoteIndex(i: number): number {

    i += 1;

    let index = Math.floor(i / 18);

    return index;

  }

}