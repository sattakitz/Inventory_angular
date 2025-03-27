import { CommonModule } from "@angular/common";
import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { Pipe1Pipe } from "../../pipes/pipe1.pipe";

@Component({
  standalone: true,
  selector: 'app-com1',
  imports: [
    CommonModule,
    Pipe1Pipe
],
  templateUrl: './com-1.component.html',
  styleUrls: ['./com-1.component.css']
})
export class Com1Component implements OnInit, OnChanges {

  @Input('messages') messages: string[] = [];

  constructor() {

  }

  ngOnInit(): void {

  }

  ngOnChanges(value: any): void {

  }
 

}