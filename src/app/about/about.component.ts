import { Component, OnInit } from '@angular/core';
import { UtilsService } from './../_data/services/utils.service';
import { SharedService } from './../_data/services/shared.service';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  title = 'About';

  public about: any;
  public sub: any;

  constructor(
    private utils: UtilsService,
    private shared: SharedService
  ) {

    utils.getStaticContent('about');

  }

  ngOnInit() {

    this.sub = this.shared.currentState.subscribe(
      (val) => {
        if (val === 'content') {
          this.about = this.utils.bindStaticData('about');
        }
      }
    );

  }

  ngOnDestroy() {

    this.sub.unsubscribe();

  }

}
