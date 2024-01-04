import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  public subscriptionForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private subscriptionService: SubscriptionService) {}
  public addSubscriber() {
    if (this.subscriptionForm.invalid) {
      alert('Nesipravan email, pokušajte ponovno!');
      return;
    }

    const model = this.subscriptionForm.getRawValue();
    this.subscriptionService.addSubscription(model).subscribe(
      (result) => {
        alert(`${model.email} email je uspješno pretplaćen`);
        this.subscriptionForm.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
