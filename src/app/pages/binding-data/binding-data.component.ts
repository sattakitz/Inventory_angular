import { Component } from '@angular/core';
import NavbarComponent from '../../layouts/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding-data',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    FormsModule,
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

  boxId: string = `box-${Math.random().toString(36).substring(7)}`;
  linkAddress: string = 'https://www.kodeasy.com';
  ttvoneAttr: string = 'binding ttvone attibute';
  styleColor: string = 'red';
  alertClass: string = 'alert alert-danger';
  isSuccess: boolean = true; //for ngClass

  isHideAlert: boolean = false;

  constructor() {
    setTimeout(() => {
      this.styleColor = 'blue',
        this.alertClass = 'alert alert-primary',
        this.isSuccess = false;
      this.title = 'คอร์สพื้นฐาน Angular Kod easy'
    }, 1000);
  }


  onClick(elem: Event) {
    this.isHideAlert = !this.isHideAlert;

  }
  onHoverChangetext(text: string) {
    this.header = text;
  }

  // onInputData(event: Event): void {
  //   const inputElement = event.target as HTMLInputElement; // Type assertion
  //   if (inputElement) {
  //     console.log(inputElement.value); // Access the input value
  //   }
  //   this.title = inputElement.value;
  // }
}
