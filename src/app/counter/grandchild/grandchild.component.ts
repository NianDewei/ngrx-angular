import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces/app-state';
import { reset } from '../counter.actions';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.sass'],
})
export class GrandchildComponent implements OnInit {
  @Input() counter: number = 0;
  @Output() resetCounter = new EventEmitter<number>();

  constructor(private counterStore: Store<AppState>) {}

  ngOnInit(): void {
    this.counterStore
      .select('counter')
      .subscribe({ next: (counter) => (this.counter = counter) });
  }

  //methods
  reset() {
    // this.counter = 0;
    // this.resetCounter.emit(0)
    this.counterStore.dispatch(reset());
  }
}
