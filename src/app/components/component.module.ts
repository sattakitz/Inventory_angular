import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Com1Component } from './com-1/com-1.component';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    Com1Component
  ],
  exports: [Com1Component]
})
export class ComponentModule { }
