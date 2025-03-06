import { Component } from '@angular/core';
import NavbarComponent from "../../layouts/navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [NavbarComponent, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
