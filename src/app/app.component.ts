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

  public routerState: string;
  public static: any;

  public initialPage: string;
  public currentPage: string;
  public targetPage: string;

  public currentLatLong: any;
  public parentLatLong: any;
  public targetLatLong: any;

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

        this.currentPage = value[0].url.substr(1);
        this.targetPage = value[1].url.substr(1);

        let sameBase = utils.matchBaseRoute(this.currentPage, this.targetPage);

        if (!sameBase) {

          let currentItem = this.static[this.currentPage];
          let targetItem = this.static[this.targetPage];

          this.routerState = this.animationDirection(currentItem.position, targetItem.position);

        }

        this.animateIndicator(false);

    });

  }

  ngOnInit(): void {

    this.staticService.getStaticContent().then(data => this.static = data[0]);

    let pathname = window.location.pathname.substr(1);

    pathname = pathname.length ? pathname : 'home';

    this.initialPage = pathname.indexOf('/') >= 0 ? pathname.substring(0, pathname.indexOf('/')) : pathname;

    // console.log('onInit. pathname = ' + pathname + ', initialPage = ' + this.initialPage);

    this.animateIndicator(true);

    let $indicator = <HTMLElement>document.querySelectorAll('.nav-indicator')[0];

    $indicator.classList.add('init');

    let thumbs = document.getElementsByClassName('replace');

    // if (thumbs.length) {
    //   console.log('thumbs');
    // } else {
    //   console.log('nay thumbs');
    // }


    // this.utils.progressiveImages();

  }

  animationDirection(current: number, target: number): string {

    let direction = (current < target) ? 'next' : 'prev';

    return direction;

  }

  // animationStart(event: any): void {
  //
  //   this.updateMainStyle('200%');
  //
  // }
  //
  // animationDone(event: any): void {
  //
  //   this.updateMainStyle('auto');
  //
  //   this.routerState = 'none';
  //
  // }
  //
  // updateMainStyle(style: string): void {
  //
  //   let $main = <HTMLElement>document.querySelectorAll('main')[0];
  //
  //   $main.style.height = style;
  //
  // }

  animateIndicator(init: boolean): void {

    let $initial = <HTMLElement>document.querySelectorAll('.nav-' + this.initialPage)[0],
        $target = <HTMLElement>document.querySelectorAll('.nav-' + this.targetPage)[0],
        $parent = <HTMLElement>document.querySelectorAll('.main-nav')[0],
        $indicator = <HTMLElement>document.querySelectorAll('.nav-indicator')[0];

    this.currentLatLong = this.utils.getElementCoordinates($initial, false);
    this.targetLatLong = this.utils.getElementCoordinates($target, false);
    this.parentLatLong = this.utils.getElementCoordinates($parent, false);

    // console.log('func. initialPage = ' + this.initialPage);

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

  progressiveImages(): void {

    if (window.addEventListener && window.requestAnimationFrame && document.getElementsByClassName) window.addEventListener('load', function() {

      // start
      var pItem = document.getElementsByClassName('progressive replace'), pCount, timer;

      // scroll and resize events
      window.addEventListener('scroll', scroller, false);
      window.addEventListener('resize', scroller, false);

      // DOM mutation observer
      if (MutationObserver) {

        var observer = new MutationObserver(function() {
          if (pItem.length !== pCount) inView();
        });
        observer.observe(document.body, { subtree: true, childList: true, attributes: true, characterData: true });

      }

      // initial check
      inView();


      // throttled scroll/resize
      function scroller() {

        timer = timer || setTimeout(function() {
          timer = null;
          inView();
        }, 300);

      }


      // image in view?
      function inView() {

        if (pItem.length) requestAnimationFrame(function() {

          var windowTop = window.pageYOffset, windowBottom = windowTop + window.innerHeight, cRect, imageTop, imageBottom, imageHeight, top, bottom, elem, p = 0;
          while (p < pItem.length) {

            elem = pItem[p].querySelectorAll('img')[0];
            cRect = elem.getBoundingClientRect();
            imageTop = windowTop + cRect.top;
            imageBottom = imageTop + cRect.height;

            top = imageTop + cRect.height * 0.2;
            bottom = imageBottom - cRect.height * 0.2;

            if (top < windowBottom && bottom > windowTop) {
              loadFullImage(pItem[p]);
              pItem[p].classList.remove('replace');
            }
            else p++;

          }

          pCount = pItem.length;

        });

      }


      // replace with full image
      function loadFullImage(item) {

        var href = item && (item.getAttribute('data-href') || item.href);
        if (!href) return;

        // load image
        var img = new Image();
        if (item.dataset) {
          img.srcset = item.dataset.srcset || '';
          img.sizes = item.dataset.sizes || '';
        }
        img.src = href;
        img.className = 'reveal';

        if (img.complete) addImg();
        else img.onload = addImg;

        // replace image
        function addImg() {

          requestAnimationFrame(function() {

            // disable click
            if (href === item.href) {
              item.style.cursor = 'default';
              item.addEventListener('click', function(e) { e.preventDefault(); }, false);
            }

            img.style.position = 'absolute';

            // add full image
            item.appendChild(img).addEventListener('animationend', function(e) {

              img.removeAttribute('style');

              // remove preview image
              var pImg = item.querySelector && item.querySelector('img.enhance');
              if (pImg) {
                e.target.alt = pImg.alt || '';
                item.removeChild(pImg);
                // e.target.classList.remove('reveal');
              }

            });

          });

        }

      }

    }, false);

  }

}
