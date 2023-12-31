import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public isExpanded = false;
  public isLoginPage: boolean = false;
  public isAuthorized = false;

  constructor(private router: Router, private authService: AuthService) {
    this.isAuthorized = localStorage.getItem('auth_token') != null;
    this.authService.authorizedSubject.subscribe((result) => {
      this.isAuthorized = result;
    });

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/admin/login') {
          this.isLoginPage = true;
        } else {
          this.isLoginPage = false;
        }
      }
    });
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.isAuthorized = false;
    this.authService.authorizedSubject.next(false);
    this.router.navigateByUrl('');
    window.location.reload();
  }
}
