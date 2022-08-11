import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces/app-state';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.sass'],
})
export class SonComponent implements OnInit {
  // @Input() counter: number = 0;
  // @Output() changeCounter = new EventEmitter<number>();

  counter: number = 0;

  constructor(private storeCounter: Store<AppState>) {}

  ngOnInit(): void {
    this.storeCounter
      .select('counter')
      .subscribe({ next: (counter) => (this.counter = counter) });
  }

  multiply() {
    this.storeCounter.dispatch(actions.multiply({ numb: 3 }));
    // this.changeCounter.emit(this.counter);
  }
  dividir() {
    this.storeCounter.dispatch(actions.split({ numb: 2 }));
    // this.counter /= 2;
    // this.changeCounter.emit(this.counter);
  }
  newCounterOfGh(newCounter: number) {
    // this.counter= 0
    // this.changeCounter.emit(this.counter)
  }
}
