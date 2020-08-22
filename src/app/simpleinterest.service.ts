import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleinterestService {

  constructor() { }

  calculate(principal: number, rate: number, time : number){
    return (principal * rate * time) / ( 100 * 12);
  }
}
