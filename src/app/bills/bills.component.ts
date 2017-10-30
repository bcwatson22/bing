import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UtilsService } from './../_data/services/utils.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss'],
  providers: [
    UtilsService
  ]
})

export class BillsComponent implements OnInit {

  title = 'Bills';

  private userId;
  private billing;
  private bills;
  private latestBill;
  // private dataLoaded: boolean;
  private activatedBill;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private utils: UtilsService
  ) {

    // this.dataLoaded = utils.getUserData();
    utils.getUserData();

  }

  ngOnInit() {

    // if (this.dataLoaded) {

      this.userId = this.utils.bindData('id');
      this.billing = this.utils.bindData('billing');
      this.bills = this.arrangeBills();
      this.latestBill = this.utils.bindData('latestBill');

      this.route.paramMap
        .switchMap((params: ParamMap) => this.billing.bills.find(o => o.id == params.get('id'))
        .subscribe(bill => this.activatedBill = bill));

      // this.route.params.subscribe((params: {id: string}) => {
      //   // setTimeout(function(){
      //     this.activatedBill = params.id;
      //     // console.log(this.activatedBill);
      //   // }, 3000);
      //
      // });

      console.log(this.activatedBill);

    // }

  }

  arrangeBills(): any {

    let billArray = this.billing.bills;

    billArray.sort(function(a, b) {

      return b.id - a.id;

    });

    return billArray;

  }

  // showBill(id): void {
  //   this.router.navigate(['/bills', {outlets: {'bill': id}}]);
  // }

  // getFilePath(id: string): string {
  //
  //   let path = './../assets/' + this.userId + '-bill-' + id + '.png';
  //
  //   return path;
  //
  // }

  getWidgetCoordinates(event: any, bill: any): void {

    let widget = event.currentTarget,
        width = widget.offsetWidth,
        height = widget.offsetHeight,
        offset = widget.getBoundingClientRect(),
        top = offset.top,
        left = offset.left;

    console.log('top: ' + top + ', left: ' + left);

  }

}
