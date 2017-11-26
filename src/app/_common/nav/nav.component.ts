import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
// import { NavItemService } from './../../_data/services/nav-item.service';

@Component({
  selector: 'navigation',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [
    // NavItemService
  ]
})

export class NavComponent implements OnInit {

  // @Input() target: string;

  constructor(
    private router: Router,
    // private navItemService: NavItemService
  ) {
    // router.events.subscribe((url:any) => console.log(url));
  }

  ngOnInit(): void {

    // console.log(this.target);

    // router.events.subscribe((url:any) => console.log(url));


    // console.log(this.router.url);

    // console.log(window.location.pathname);

  }

}
