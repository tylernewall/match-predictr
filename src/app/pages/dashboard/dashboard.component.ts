import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


}
