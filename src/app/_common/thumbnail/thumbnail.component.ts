import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})

export class ThumbnailComponent implements OnInit {

  @Input() portrait: any;
  @Input() blockquote: any;
  @Output() showPortrait = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

    // let thumbs = document.getElementsByClassName('replace');
    //
    // if (thumbs.length) {
    //   console.log('thumbs');
    // } else {
    //   console.log('nay thumbs');
    // }

    //
    // if (thumbs.length) this.progressiveImages();

  }

  // progressiveImages(): void {
  //
  //   if (window.addEventListener && window.requestAnimationFrame && document.getElementsByClassName) window.addEventListener('load', function() {
  //
  //     // start
  //     var pItem = document.getElementsByClassName('progressive replace'), pCount, timer;
  //
  //     // scroll and resize events
  //     window.addEventListener('scroll', scroller, false);
  //     window.addEventListener('resize', scroller, false);
  //
  //     // DOM mutation observer
  //     if (MutationObserver) {
  //
  //       var observer = new MutationObserver(function() {
  //         if (pItem.length !== pCount) inView();
  //       });
  //       observer.observe(document.body, { subtree: true, childList: true, attributes: true, characterData: true });
  //
  //     }
  //
  //     // initial check
  //     inView();
  //
  //
  //     // throttled scroll/resize
  //     function scroller() {
  //
  //       timer = timer || setTimeout(function() {
  //         timer = null;
  //         inView();
  //       }, 300);
  //
  //     }
  //
  //
  //     // image in view?
  //     function inView() {
  //
  //       if (pItem.length) requestAnimationFrame(function() {
  //
  //         var windowTop = window.pageYOffset, windowBottom = windowTop + window.innerHeight, cRect, imageTop, imageBottom, imageHeight, top, bottom, elem, p = 0;
  //         while (p < pItem.length) {
  //
  //           elem = pItem[p].querySelectorAll('img')[0];
  //           cRect = elem.getBoundingClientRect();
  //           imageTop = windowTop + cRect.top;
  //           imageBottom = imageTop + cRect.height;
  //
  //           top = imageTop + cRect.height * 0.2;
  //           bottom = imageBottom - cRect.height * 0.2;
  //
  //           if (top < windowBottom && bottom > windowTop) {
  //             loadFullImage(pItem[p]);
  //             pItem[p].classList.remove('replace');
  //           }
  //           else p++;
  //
  //         }
  //
  //         pCount = pItem.length;
  //
  //       });
  //
  //     }
  //
  //
  //     // replace with full image
  //     function loadFullImage(item) {
  //
  //       var href = item && (item.getAttribute('data-href') || item.href);
  //       if (!href) return;
  //
  //       // load image
  //       var img = new Image();
  //       if (item.dataset) {
  //         img.srcset = item.dataset.srcset || '';
  //         img.sizes = item.dataset.sizes || '';
  //       }
  //       img.src = href;
  //       img.className = 'reveal';
  //
  //       if (img.complete) addImg();
  //       else img.onload = addImg;
  //
  //       // replace image
  //       function addImg() {
  //
  //         requestAnimationFrame(function() {
  //
  //           // disable click
  //           if (href === item.href) {
  //             item.style.cursor = 'default';
  //             item.addEventListener('click', function(e) { e.preventDefault(); }, false);
  //           }
  //
  //           img.style.position = 'absolute';
  //
  //           // add full image
  //           item.appendChild(img).addEventListener('animationend', function(e) {
  //
  //             img.removeAttribute('style');
  //
  //             // remove preview image
  //             var pImg = item.querySelector && item.querySelector('img.enhance');
  //             if (pImg) {
  //               e.target.alt = pImg.alt || '';
  //               item.removeChild(pImg);
  //               // e.target.classList.remove('reveal');
  //             }
  //
  //           });
  //
  //         });
  //
  //       }
  //
  //     }
  //
  //   }, false);
  //
  // }

  launchModal(id: string, animate: boolean, clickEvent: any): void {

    this.showPortrait.emit({id, animate, clickEvent});

  }

}
