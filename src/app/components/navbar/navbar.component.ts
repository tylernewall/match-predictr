import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  hidden: boolean = true;
  mobileNav: boolean = false;

  constructor(public router: Router) {}


  toggleProfile() {
    this.hidden = !this.hidden;
  }

  toggleMobileNav() {
    this.mobileNav = !this.mobileNav;
  }


}
