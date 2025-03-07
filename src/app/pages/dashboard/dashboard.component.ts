import { Component } from '@angular/core';
import NavbarComponent from "../../layouts/navbar/navbar.component";
import { RouterModule } from '@angular/router';
import { ChartComponent } from "../../shared/components/chart/chart.component";

@Component({
  selector: 'app-dashboard',
  imports: [NavbarComponent, RouterModule, ChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
