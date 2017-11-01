import { Component, OnInit } from '@angular/core';
import { UtilsService } from './../_data/services/utils.service';
import { StaticContentService } from './../_data/services/static-content.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    StaticContentService
  ]
})

export class HomeComponent implements OnInit {

  title = 'Home';

  private home;
  private portraits;

  constructor(
    private utils: UtilsService
  ) {

    utils.getStaticContent();
    utils.getPortraits();

  }

  ngOnInit() {

    this.home = this.utils.bindData('home');
    this.portraits = this.utils.bindPortraits();

  }

}
