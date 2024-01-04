import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryService } from 'src/app/services/category.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css'],
})
export class ConfigurationComponent implements OnInit {
  public allUsers: any = [];
  public allCategories: any = [];
  public allSubscribers: any = [];

  public userFrom = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  public categoryForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  constructor(
    private authService: AuthService,
    private router: Router,
    private categoryService: CategoryService,
    private subscriptionService: SubscriptionService
  ) {}
  public addAdmin() {
    if (this.userFrom.invalid) return;
    const formData = this.userFrom.getRawValue();

    this.authService.register(formData).subscribe(
      (result) => {
        alert(`${formData.email} je uspješno dodan`);
        this.userFrom.reset();
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

  public deleteAdmin(userId: string) {
    if (confirm('Jeste li sigurni da želite obrisati odabranog admina?')) {
      this.authService.deleteAdmin(userId).subscribe(
        (result) => {
          this.fetchAllUsers();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  public deleteCategory(categoryId: string) {
    if (confirm('Jeste li sigurni da želite obrisati odabranu kategoriju?')) {
      this.categoryService.deleteCategory(categoryId).subscribe(
        (result) => {
          this.getAllCategories();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  public addCategory() {
    if (this.categoryForm.invalid) return;
    const formData = this.categoryForm.getRawValue();

    this.categoryService.addCategory(formData).subscribe(
      (result) => {
        alert(`${formData.name} kategorija je uspješno dodana`);
        this.categoryForm.reset();
        this.getAllCategories();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private getAllCategories() {
    this.categoryService.getEventCategories().subscribe((result) => {
      this.allCategories = result;
    });
  }

  private getAllSubscribers() {
    this.subscriptionService.getAllSubscribers().subscribe((result) => {
      this.allSubscribers = result;
    });
  }

  public deleteSubscriber(subscriptionId: string) {
    if (
      confirm('Jeste li sigurni da želite obrisati odabranog pretplatnika?')
    ) {
      this.subscriptionService.deleteSubscription(subscriptionId).subscribe(
        (result) => {
          this.getAllSubscribers();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  ngOnInit() {
    this.fetchAllUsers();
    this.getAllCategories();
    this.getAllSubscribers();
  }
}
