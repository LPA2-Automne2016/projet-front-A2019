import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from '../counter.service';
import { Observable } from 'rxjs';
import { Counter } from '../counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() position: number;

  value: Counter;

  constructor(public counterService: CounterService) { }

  ngOnInit() {
    console.log("call counter")
    this.counterService.getCounterValue(this.position)
          .subscribe(counter => this.value =  counter)
  }

  increment() {
    this.counterService.increment(this.position);
  }

}
