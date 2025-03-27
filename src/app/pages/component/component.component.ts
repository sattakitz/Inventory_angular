import { Component, Injectable } from '@angular/core';
import NavbarComponent from "../../layouts/navbar/navbar.component";
import { Com1Component } from './com-1/com-1.component';
import { Com2Component } from './com-2/com-2.component';
import { Directive1Directive } from '../../directives/directive1.directive';
import { CommonModule } from '@angular/common';
import { Directive2Directive } from '../../directives/directive2.directive';

@Component({
  selector: 'app-component',
  imports: [
    NavbarComponent,
    Com1Component,
    Com2Component,
    Directive1Directive,
    Directive2Directive,
    CommonModule,

  ],
  templateUrl: './component.component.html',
  styleUrl: './component.component.css'
})
export class ComponentComponent {

  messages: string[] = ["Basic Input for component"];
  isShow: boolean = true;
  isShowComponent: boolean = false;

  feLang: string = 'x';

  languageItems: string[] = ['Angular', 'React', 'Vue'];

  constructor() {
    // this.languageItems.push('NodeJs');

    // for (let i = 0; i < this.languageItems.length; i++) {
    //   console.log(i + 1, 'for Lang is :', this.languageItems[i]);
    // }

    // this.languageItems.forEach((lang, i) => { console.log(`${i + 1} for each Lang is : ${lang}`,); });
  }

  // รับข้อมูลจาก Output Com2
  onMessage(messages: string) {
    this.messages.push(messages);
  }

  // list loading
  onLoading() {
    this.isShow = !this.isShow;
    setTimeout(() => this.isShow = true, 1000);
  }
}

