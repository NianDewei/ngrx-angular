import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './counter/counter.actions';
import { AppState } from './interfaces/app-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'ngrx-angular';

  counter: number = 0;

  constructor(private store: Store<AppState>) {
    this.store
      .select('counter')
      .subscribe({ next: (counter) => (this.counter = counter) });
  }

  // methos
  increase() {
    // this.counter++;
    // this.store.dispatch(increment());
    this.store.dispatch(actions.increment());
  }
  decrease() {
    // this.counter > 0 ? this.counter-- : '';
    this.store.dispatch(actions.decrease());
  }
}
