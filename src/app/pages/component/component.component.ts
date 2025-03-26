import { Component } from '@angular/core';
import NavbarComponent from "../../layouts/navbar/navbar.component";
import { Com1Component } from './com-1/com-1.component';
import { Com2Component } from './com-2/com-2.component';

@Component({
  selector: 'app-component',
  imports: [NavbarComponent, Com1Component, Com2Component],
  templateUrl: './component.component.html',
  styleUrl: './component.component.css'
})
export class ComponentComponent {
  message: string = "Basic Input for component.";

  // รับข้อมูลจาก Output Com2
  onMessage(message: string) {
    this.message = message;
  }
}
