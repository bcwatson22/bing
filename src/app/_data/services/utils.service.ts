import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PortraitService } from './portrait.service';
import { StaticContentService } from './static-content.service';

@Injectable()

export class UtilsService {

  private rawStatic;
  private staticData;

  // private rawPortraits;
  private portraitData;

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

    let pictures = this.portraitData.filter(o => eval('o.' + key) === value);

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

  activatePortraitData(collection: any, id: string): any {

    let targetPortrait = collection.find(o => o.id == id);

    return targetPortrait;

  }

  pushHistory(baseUrl: string, id: string, animate: boolean, clickEvent: any): string {

    let url = this.router.createUrlTree(['/home', id]).toString();

    if (animate) {

      // this.modalState = 'animate';

      if (clickEvent) {

        this.getPortraitCoordinates(clickEvent);
        this.location.go(url);

      }

      return 'animate';

    } else {

      // this.modalState = 'active';
      this.location.replaceState(url);

      return 'active';

    }

  }

  getPortraitCoordinates(event: any): void {

    let widget = event.currentTarget,
        width = widget.offsetWidth,
        height = widget.offsetHeight,
        offset = widget.getBoundingClientRect(),
        top = offset.top + (height / 2),
        left = offset.left + (width / 2);

    // this.widgetTop = top + 'px';
    // this.widgetLeft = left + 'px';

  }

}
