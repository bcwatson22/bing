import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Portrait } from './../models/portrait';

import { PORTRAITS } from './../mock-portraits';

@Injectable()
export class PortraitService {

   constructor(private http: Http) {
   }

   getPortraits(): Observable<Portrait[]> {

      return this.http.get('assets/data/portraits.json')
         .map((res: Response) => res)
         .catch((error: any) => Observable.throw(error));

   }

  // getPortraits(): Promise<Portrait[]> {
  //
  //   return Promise.resolve(PORTRAITS);
  //
  // }

}
