import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/pairwise';
import { RouterAnimation } from './_animations/router';
import { StaticContentService } from './_data/services/static-content.service';
import { UtilsService } from './_data/services/utils.service';
// import { NavItem } from './_data/models/nav-item';
// import { NavItemService } from './_data/services/nav-item.service';
// import { HeaderComponent } from './_common/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    RouterAnimation
  ],
  providers: [
    // NavItemService
  ]
})

export class AppComponent implements OnInit {

  private routerState: string;
  private static: any;

  private initialPage: string;
  private currentPage: string;
  private targetPage: string;

  private currentLatLong: any;
  private parentLatLong: any;
  private targetLatLong: any;

  // private indicator = document.querySelectorAll('.nav-indicator')[0];

  constructor(
    private router: Router,
    private staticService: StaticContentService,
    private utils: UtilsService
  ) {

    this.router.events
      .filter(event => event instanceof NavigationStart)
      .pairwise()
      .subscribe((value: [NavigationStart, NavigationStart]) => {

        console.log(this.routerState);

        this.currentPage = value[0].url.substr(1);
        this.targetPage = value[1].url.substr(1);

        let sameBase = utils.matchBaseRoute(this.currentPage, this.targetPage);

        if (!sameBase) {

          let currentItem = this.static[this.currentPage];
          let targetItem = this.static[this.targetPage];

          this.routerState = this.animationDirection(currentItem.position, targetItem.position);

        }

        this.animateIndicator(false);

        console.log(this.routerState);

    });

  }

  ngOnInit(): void {

    this.staticService.getStaticContent().then(data => this.static = data[0]);

    this.initialPage = window.location.pathname.substr(1);

    this.animateIndicator(true);

    let $indicator = <HTMLElement>document.querySelectorAll('.nav-indicator')[0];

    $indicator.classList.add('init');

  }

  animationDirection(current: number, target: number): string {

    let direction = (current < target) ? 'next' : 'prev';

    return direction;

  }

  animationStart(event: any): void {

    this.updateMainStyle('200%');

  }

  animationDone(event: any): void {

    this.updateMainStyle('auto');

    this.routerState = 'none';

  }

  updateMainStyle(style: string): void {

    let $main = <HTMLElement>document.querySelectorAll('main')[0];

    $main.style.height = style;

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
      styleString = 'width: ' + this.currentLatLong.width + 'px; transform: translateX(' + offsetLeft + 'px);';

    } else {

      $indicator.classList.add('resize');

      offsetLeft = (this.targetLatLong.left - this.parentLatLong.left).toFixed(1);
      styleString = 'width: ' + this.targetLatLong.width + 'px; transform: translateX(' + offsetLeft + 'px);';

    }

    $indicator.setAttribute('style', styleString);

  }

}
