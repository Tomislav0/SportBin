import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public allUsers: any = [];

  public userFrom = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private authService: AuthService, private router: Router) {}
  public submit() {
    if (this.userFrom.invalid) return;
    const formData = this.userFrom.getRawValue();

    this.authService.register(formData).subscribe(
      (result) => {
        alert(`${formData.email} je uspješno dodan`);
        this.fetchAllUsers();
      },
      (error) => {
        if (error.status == 401) {
          alert('Neispravan email ili lozinka');
        }
      }
    );
  }

  private fetchAllUsers() {
    this.authService.getAllUsers().subscribe((result) => {
      this.allUsers = result;
    });
  }

  ngOnInit() {
    this.fetchAllUsers();
  }
}
