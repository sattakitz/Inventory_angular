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
    ActionBarComponent
  ],
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent {
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
}
