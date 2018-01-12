import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class SharedService {

  private stateSource = new BehaviorSubject<string>('default message');

  currentState = this.stateSource.asObservable();

  constructor() { }

  changeState(state: string) {

    this.stateSource.next(state)

  }

}
