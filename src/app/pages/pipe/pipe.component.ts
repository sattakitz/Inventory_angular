import { Component } from '@angular/core';
import { Com1Component } from "../../components/com-1/com-1.component";
import { Com2Component } from "../../components/com-2/com-2.component";
import NavbarComponent from "../../layouts/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { Pipe1Pipe } from "../../pipes/pipe1.pipe";

@Component({
  selector: 'app-pipe',
  imports: [Com1Component, Com2Component, NavbarComponent, CommonModule, Pipe1Pipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  messages: string[] = [
    "Basic Input for component",
    "What is Lorem Ipsum?",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    "but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ",
    "sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  ];
  isShowWorkshop: boolean = false;

  dataItem: Date = new Date();
  numberItem: number = 1234.789;

  constructor() {
  }

  // รับข้อมูลจาก Output Com2
  onMessage(messages: string) {
    this.messages.push(messages);
  }


}
