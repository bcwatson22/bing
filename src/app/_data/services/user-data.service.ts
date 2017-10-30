import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { UserData } from './../models/user-data';

import { USERDATA } from './../mock-user-data';

// @Injectable()
//
// export class UserDataService {
//
//   getUserData(): object {
//
//     return USERDATA;
//
//   }
//
// }

@Injectable()
export class UserDataService {

   constructor(private http: Http) {
   }

  //  getUserData(): Observable<UserData[]> {
   //
  //     return this.http.get('http://billywatson.net/plusnet/userData.json')
  //        .map((res: Response) => res.json())
  //        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   //
  //  }

  getUserData(): Promise<UserData[]> {

    return Promise.resolve(USERDATA);

  }

}
