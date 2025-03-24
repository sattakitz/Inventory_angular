import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  imports: [],
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.css'
})
export class ActionBarComponent implements OnInit {

  counter: number = 0;

  @Input() step: number = 1;
  @Output() numberChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  decrease() {
    if (this.counter - this.step >= 0)
      this.counter = this.counter - this.step;
    this.numberChange.emit(this.counter);
  }
  increase() {
    if (this.counter + this.step <= 100)
      this.counter = this.counter + this.step;
    this.numberChange.emit(this.counter);

  }

}
