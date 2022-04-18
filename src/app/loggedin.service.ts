import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedinService {


  role: any = null
  constructor() {
    this.role = new BehaviorSubject("")
  }
}
