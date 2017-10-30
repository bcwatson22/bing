import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/pairwise';

import { NavItem } from './_data/models/nav-item';
import { NavItemService } from './_data/services/nav-item.service';
import { HeaderComponent } from './_common/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // RouterAnimation
  ],
  providers: [
    NavItemService
  ]
})

export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private navItemService: NavItemService
  ) {

    // this.router.events
    //   .filter(event => event instanceof NavigationStart)
    //   .pairwise()
    //   .subscribe((value: [NavigationStart, NavigationStart]) => {
    //
    //     let currentPage = value[0].url.substr(1);
    //     let targetPage = value[1].url.substr(1);
    //
    //     let currentItem = this.navItems.find(o => o.id === currentPage);
    //     let targetItem = this.navItems.find(o => o.id === targetPage);
    //
    //     this.routerState = this.animationDirection(currentItem.position, targetItem.position);
    //
    // });

  }

  ngOnInit(): void {



  }

}
