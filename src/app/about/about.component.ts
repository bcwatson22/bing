import { Component, OnInit } from '@angular/core';
import { UtilsService } from './../_data/services/utils.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  private about;

  constructor(
    private utils: UtilsService
  ) {

    utils.getStaticContent();

  }

  ngOnInit() {

    this.about = this.utils.bindData('about');

  }

}
