import { Component, OnInit } from '@angular/core';

import { NavItemService } from './../../_data/services/nav-item.service';

@Component({
  selector: 'navigation',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [
    NavItemService
  ]
})

export class NavComponent implements OnInit {

  constructor(private navItemService: NavItemService) { }

  ngOnInit(): void {



  }

}
