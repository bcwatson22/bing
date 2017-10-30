import { NavItem } from './models/nav-item';

export const NAVITEMS: NavItem[] = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    position: 1,
    cssClass: 'home'
  },
  {
    id: 'account',
    name: 'Account',
    position: 2,
    cssClass: 'user'
  },
  {
    id: 'bills',
    name: 'Bills',
    position: 3,
    cssClass: 'gbp'
  },
  {
    id: 'broadband',
    name: 'Broadband',
    position: 4,
    cssClass: 'wifi'
  },
  {
    id: 'phone',
    name: 'Phone',
    position: 5
  }
];
