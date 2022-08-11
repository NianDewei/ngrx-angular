import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.sass'],
})
export class SonComponent implements OnInit {
  @Input() counter: number = 0;
  @Output() changeCounter = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  multiply() {
    this.counter *= 2;
    this.changeCounter.emit(this.counter);
  }
  dividir() {
    this.counter /= 2;
    this.changeCounter.emit(this.counter);
  }
  newCounterOfGh(newCounter:number){
    this.counter= 0
    this.changeCounter.emit(this.counter)
  }
}
