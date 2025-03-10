import { Component, OnInit } from '@angular/core';
import NavbarComponent from "../../layouts/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-product',
  imports: [NavbarComponent,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent implements OnInit {
  isModalOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  ngOnInit(): void {

  }

}
