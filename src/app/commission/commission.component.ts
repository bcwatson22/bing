import { Component, OnInit } from '@angular/core';
import { UtilsService } from './../_data/services/utils.service';

@Component({
  selector: 'commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.scss']
})

export class CommissionComponent implements OnInit {

  title = 'Commission';

  public commission;

  constructor(
    private utils: UtilsService
  ) {

    utils.getStaticContent();

  }

  ngOnInit() {

    this.commission = this.utils.bindData('commission');

  }

}
