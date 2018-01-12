import { Component, OnInit } from '@angular/core';
import { UtilsService } from './../_data/services/utils.service';
import { SharedService } from './../_data/services/shared.service';

@Component({
  selector: 'commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.scss']
})

export class CommissionComponent implements OnInit {

  title = 'Commission';

  public commission: any;
  public sub: any;

  constructor(
    private utils: UtilsService,
    private shared: SharedService
  ) {

    utils.getStaticContent('commission');

  }

  ngOnInit() {

    this.sub = this.shared.currentState.subscribe(
      (val) => {
        if (val === 'content') {
          this.commission = this.utils.bindStaticData('commission');
        }
      }
    );

  }

  ngOnDestroy() {

    this.sub.unsubscribe();

  }

}
