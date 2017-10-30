import { Component, OnInit } from '@angular/core';
import { UtilsService } from './../_data/services/utils.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    UtilsService
  ]
})

export class HomeComponent implements OnInit {

  title = 'Home';

  private userData;
  private currentUser;
  private account;
  private billing;
  private latestBill;
  private broadband;
  private phone;
  private mobile;
  private tv;

  constructor(private utils: UtilsService) {

    utils.getUserData();

  }

  ngOnInit() {

    this.account = this.utils.bindData('account');
    this.broadband = this.utils.bindData('broadband');
    this.billing = this.utils.bindData('billing');
    this.latestBill = this.utils.bindData('latestBill');
    this.phone = this.utils.bindData('phone');
    this.mobile = this.utils.bindData('mobile');
    this.tv = this.utils.bindData('tv');

  }

}
