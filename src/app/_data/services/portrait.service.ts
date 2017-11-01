import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Portrait } from './../models/portrait';

import { PORTRAITS } from './../mock-portraits';

// @Injectable()
//
// export class PortraitService {
//
//   getPortrait(): object {
//
//     return PORTRAITS;
//
//   }
//
// }

@Injectable()
export class PortraitService {

   constructor(private http: Http) {
   }

  //  getPortrait(): Observable<Portrait[]> {
   //
  //     return this.http.get('http://billywatson.net/plusnet/userData.json')
  //        .map((res: Response) => res.json())
  //        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   //
  //  }

  getPortraits(): Promise<Portrait[]> {

    return Promise.resolve(PORTRAITS);

  }

}
