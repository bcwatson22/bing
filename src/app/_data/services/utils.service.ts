import { Injectable } from '@angular/core';
import { PortraitService } from './portrait.service';
import { StaticContentService } from './static-content.service';

@Injectable()

export class UtilsService {

  private rawStatic;
  private staticData;

  // private rawPortraits;
  private portraitData;

  constructor(
    private portraitService: PortraitService,
    private staticService: StaticContentService
  ) {
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

  getStaticContent(): void {

    this.staticService.getStaticContent().then(
      (val) => {
        this.rawStatic = val;
        this.staticData = this.rawStatic[0];
      }
    );

  }

  getPortraits(): void {

    this.portraitService.getPortraits().then(
      (val) => {
        this.portraitData = val;
        // this.portraitData = this.rawPortraits[0];
      }
    );

  }

  // getTargetData(): any {
  //
  //   let targetDate = this.rawStatic.find(o => o.id === id);
  //
  //   // console.log(targetUser);
  //
  //   this.currentUser = targetUser;
  //
  //   // this.bindData();
  //
  //   return targetUser;
  //
  // }
  //
  // getLatestBill(bills: any[]): any {
  //
  //   let latestBill = bills.slice(bills.length -1);
  //
  //   return latestBill[0];
  //
  // }
  //

  bindData(key: any): any {

    let binding;

    binding = this.staticData[key];

    return binding;

  }

  bindPortraits(): any {

    // let binding;
    //
    // binding = this.portraitData[key];

    return this.portraitData;

  }

}
