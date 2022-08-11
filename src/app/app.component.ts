import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'ngrx-angular';

  counter: number = 0;
  // methos
  increase() {
    this.counter ++;
  }
  decrease() {
    this.counter > 0 ? (this.counter --) : '';
  }
}
