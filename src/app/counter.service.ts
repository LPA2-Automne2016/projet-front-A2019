import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Counter } from './counter';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public initialValue = [49, 72, 48];
  public positionCounter = [49, 72, 48];

  constructor(private httpClient: HttpClient) { }

  reset() {
    this.initialValue = [0, 0, 0];
  }

  increment(position: number): number {
    this.initialValue[position]++;
    return this.initialValue[position];
  }

  getCounterValue(id: number): Observable<Counter> {
    return this.httpClient.get<Counter>("https://lp4asgadot.herokuapp.com/counters/"+this.positionCounter[id]+".json")
  }


}
