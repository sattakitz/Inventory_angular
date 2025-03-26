import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-com1',
  templateUrl: './com-1.component.html',
  styleUrls: ['./com-1.component.css']
})
export class Com1Component implements OnInit, OnChanges {

  @Input('message') message: string = 'This is component 1';

  constructor() {

  }

  ngOnInit(): void {

  }

  ngOnChanges(value: any): void {

  }

}