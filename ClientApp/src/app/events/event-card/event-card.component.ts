import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EventDTO } from 'src/app/models';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css'],
})
export class EventCardComponent {
  @Input()
  event!: EventDTO;

  showScore: boolean = false;

  constructor(public router: Router) {}

  public onEventClicked(event: EventDTO) {
    this.router.navigate([`details/${event.id}`]);
  }
}
