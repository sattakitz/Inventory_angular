import { Component } from '@angular/core';
import NavbarComponent from "../../layouts/navbar/navbar.component";
import { UserComponent } from '../user.component';
import { CurrencyPipe } from '@angular/common';
import { ActionBarComponent } from '../../shared/components/action-bar/action-bar.component';


@Component({
  selector: 'app-learning',
  imports: [NavbarComponent,
    UserComponent,
    CurrencyPipe,
    ActionBarComponent,
  ],
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent implements ILearningComponent {


  isEditable = true;

  message!: string;

  greet() {
    console.log('Hello, there 👋');
  }

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }

  operatingSystems = [{ id: 'win', name: 'Windows' }, { id: 'osx', name: 'MacOS' }, { id: 'linux', name: 'Linux' }];
  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];

  value = 0;
  calBuffet(value: string) {
    const price = Number(value);
    this.value = (price * 3) / 4
  }

  testclick() {

  }

  testNumberChange(value: number) {
    console.log('testnumberChange', value);

  }

  constructor() {
    const myClass = new MyClass();
    console.log(myClass);

    this.addItem('hello')
    this.addItem('world')
    console.log(this.items);
    this.removeItem(0);
    console.log(this.items);


  }

  items: string[] = [];

  addItem(item: string): any {
    this.items.push(item);
  }
  removeItem(index: number): any {
    this.items.splice(index, 1);
  }
}

@MyDecorator('hello')

class MyClass {

  title: string = 'basic angular';
  array: number[] = [200, 300, 400];
  objects = { first: 'myname', lastname: 'mylastname' }

  onFunction(param: string): string {
    return `onFunction :  ${param}`;
  }

  get onGetFunction(): string {
    const sum = 2 + 2 * 3;
    return `onGetFunction: ${sum}`;
  }

  constructor() {
    this.array.push(500);
    this.array.push(600);
  }
}

interface ILearningComponent {
  items: Array<string>;
  addItem(item: string): string;
  removeItem(index: number): number;
}

function MyDecorator(message: string) {
  return function (targat: Function) {
    targat.prototype.sayHello = message;

  }

}