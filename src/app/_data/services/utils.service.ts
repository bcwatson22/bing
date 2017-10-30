import { Injectable } from '@angular/core';
import { UserDataService } from './user-data.service';

@Injectable()

export class UtilsService {

  private userData;
  private currentUser;
  private account;
  private billing;
  private latestBill;
  private broadband;
  private phone;
  private mobile;
  private tv;

  constructor(private userDataService: UserDataService) {
  }

  // getUserData(): void {
  //
  //   this.userDataService.getUserData().subscribe(
  //     (val) => {
  //       this.userData = val;
  //     },
  //     (err) => console.log(err),
  //     () => {
  //       this.getTargetData(1);
  //     }
  //   );
  //
  // }

  getUserData(): any {

    this.userDataService.getUserData().then(
      (val) => {
        this.userData = val;
        this.getTargetData(224401);

        // return true;
      }
    );

  }

  getTargetData(id): any {

    let targetUser = this.userData.find(o => o.id === id);

    // console.log(targetUser);

    this.currentUser = targetUser;

    // this.bindData();

    return targetUser;

  }

  getLatestBill(bills: any[]): any {

    let latestBill = bills.slice(bills.length -1);

    return latestBill[0];

  }

  bindData(key: string): any {

    let binding;

    if (key === 'latestBill') {

      binding = this.getLatestBill(this.currentUser.billing.bills);

    } else {

      binding = this.currentUser[key];

    }

    return binding;

  }

}
