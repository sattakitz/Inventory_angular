import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Com1Component } from './components/com-1/com-1.component';
import { CommonModule } from '@angular/common';
import { Pipe1Pipe } from './pipes/pipe1.pipe';

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        Com1Component,
        Pipe1Pipe
    ],
    providers: [],
    exports: [
        Com1Component
    ]

})
export class AppModule { }