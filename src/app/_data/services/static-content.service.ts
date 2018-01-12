import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { StaticContent } from './../models/static-content';

import { CONTENT } from './../mock-static-content';

@Injectable()
export class StaticContentService {

   constructor(private http: Http) {
   }

   // getStaticContent(): Observable<StaticContent[]> {
   //
   //    return this.http.get('http://billywatson.net/plusnet/userData.json')
   //       .map((res: Response) => res.json())
   //       .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   //
   // }

   getStaticContent(): Observable<StaticContent[]> {

      return this.http.get('assets/data/static-content.json')
         .map((res: Response) => res)
         .catch((error: any) => Observable.throw(error));

   }

  // getStaticContent(): Promise<StaticContent[]> {
  //
  //   return Promise.resolve(CONTENT);
  //
  // }

}
