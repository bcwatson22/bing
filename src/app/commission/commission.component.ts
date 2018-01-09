import { Component, OnInit } from '@angular/core';
import { UtilsService } from './../_data/services/utils.service';

@Component({
  selector: 'commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.scss']
})

export class CommissionComponent implements OnInit {

  title = 'Commission';

  public commission: any;

  constructor(
    private utils: UtilsService
  ) {

    utils.getStaticContent('commission');

  }

  ngOnInit() {

    this.commission = this.utils.bindStaticData('commission');

  }

}
