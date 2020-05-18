import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pairwise';
import { RouterAnimation } from './_animations/router';
import { StaticContentService } from './_data/services/static-content.service';
import { UtilsService } from './_data/services/utils.service';
import { SharedService } from './_data/services/shared.service';
import 'lazysizes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    RouterAnimation
  ]
})

export class AppComponent implements OnInit {

  public routerState: string;
  public static: any;

  public initialPage: string;
  public currentPage: string;
  public targetPage: string;

  public currentLatLong: any;
  public parentLatLong: any;
  public targetLatLong: any;
  public sub: any;

  constructor(
    private router: Router,
    private staticService: StaticContentService,
    private utils: UtilsService,
    private shared: SharedService
  ) {

    utils.getStaticContent(false);

    this.router.events
      .filter(event => event instanceof NavigationStart)
      .pairwise()
      .subscribe((value: [NavigationStart, NavigationStart]) => {

        this.currentPage = value[0].url.substr(1);
        this.targetPage = value[1].url.substr(1);

        this.animateIndicator(false);

    });

  }

  ngOnInit(): void {

    let pathname = window.location.pathname.substr(1);

    pathname = pathname.length ? pathname : 'home';

    this.initialPage = pathname.indexOf('/') >= 0 ? pathname.substring(0, pathname.indexOf('/')) : pathname;

    this.animateIndicator(true);

    let $indicator = <HTMLElement>document.querySelectorAll('.nav-indicator')[0];

    $indicator.classList.add('init');

  }

  animationDirection(current: number, target: number): string {

    let direction = (current < target) ? 'next' : 'prev';

    return direction;

  }

  animateIndicator(init: boolean): void {

    let $initial = <HTMLElement>document.querySelectorAll('.nav-' + this.initialPage)[0],
        $target = <HTMLElement>document.querySelectorAll('.nav-' + this.targetPage)[0],
        $parent = <HTMLElement>document.querySelectorAll('.main-nav')[0],
        $indicator = <HTMLElement>document.querySelectorAll('.nav-indicator')[0];

    this.currentLatLong = this.utils.getElementCoordinates($initial, false);
    this.targetLatLong = this.utils.getElementCoordinates($target, false);
    this.parentLatLong = this.utils.getElementCoordinates($parent, false);

    let offsetLeft,
        styleString;

    if (init) {

      offsetLeft = (this.currentLatLong.left - this.parentLatLong.left).toFixed(1);
      styleString = 'width: ' + this.currentLatLong.width + 'px; transform: translate3d(' + offsetLeft + 'px, 0, 0);';

    } else {

      $indicator.classList.add('resize');

      offsetLeft = (this.targetLatLong.left - this.parentLatLong.left).toFixed(1);
      styleString = 'width: ' + this.targetLatLong.width + 'px; transform: translate3d(' + offsetLeft + 'px, 0, 0);';

    }

    $indicator.setAttribute('style', styleString);

  }

}
