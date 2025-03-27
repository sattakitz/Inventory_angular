import { AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Dropdown } from 'bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, NgbDropdownModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export default class NavbarComponent implements AfterViewInit {
  ngAfterViewInit() {
    const dropdownElement = document.querySelector('.dropdown-toggle');
    if (dropdownElement) {
      new Dropdown(dropdownElement);
    }
  }
}
