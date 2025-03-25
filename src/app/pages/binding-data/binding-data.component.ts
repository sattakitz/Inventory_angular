import { Component } from '@angular/core';
import NavbarComponent from '../../layouts/navbar/navbar.component';

@Component({
  selector: 'app-binding-data',
  imports: [
    NavbarComponent
  ],
  templateUrl: './binding-data.component.html',
  styleUrl: './binding-data.component.css'
})
export class BindingDataComponent {

  header: string = 'basic angular';
  title: string = 'Angular is very easy';

  content: string = `
  With <a href="" > supporting </a> text below as a natural lead-in to additional content.
  `;
  button: string = "เนื้อหาเพิ่มเติม";


  constructor() {
    setTimeout(() => this.title = 'คอร์สพื้นฐาน Angular Kod easy', 1000);
  }

}
