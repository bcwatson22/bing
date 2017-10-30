import { Injectable } from '@angular/core';

import { NavItem } from './../models/nav-item';
import { NAVITEMS } from './../mock-nav-items';

@Injectable()

export class NavItemService {

  getNavItems(): Promise<NavItem[]> {

    return Promise.resolve(NAVITEMS);

  }

}
