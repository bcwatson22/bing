import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UtilsService } from './../../_data/services/utils.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  providers: [
    UtilsService
  ]
})

export class ModalComponent implements OnInit {

  private activatedBill;
  private billing;
  private sub: any;

  @Input() bill: any;
  @Output() modalClose: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private utils: UtilsService
  ) {

    // utils.getUserData();

  }

  ngOnInit(): void {

    this.billing = this.utils.bindData('billing');

    // this.route.paramMap
    //   .switchMap((params: ParamMap) => params.get('id'))
    //   .subscribe(bill => this.activatedBill = bill);

    // this.route.params.subscribe(params: => {
    //   this.activatedBill = params.id;
    // });

    // this.sub = this.route.params.subscribe(params => {
    //   this.activatedBill = +params['id']; // (+) converts string 'id' to a number
    //   console.log(this.activatedBill);
    // });
    //
    // console.log(this.activatedBill);

  }

  closeModal( $event ) {

    this.router.navigate([{outlets: {bill: null}}]);
    this.modalClose.next($event);

  }

}
