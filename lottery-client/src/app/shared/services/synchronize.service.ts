import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SynchronizeService {
  
  changeMethodBetoListener = new BehaviorSubject(null);

  fatherTypeListener = new BehaviorSubject(null);

  childlottoTypeListener = new BehaviorSubject(null);
  constructor() {}
}
