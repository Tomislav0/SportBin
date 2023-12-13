import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public events: any[] = [];
  constructor(public eventService: EventService) {
    this.eventService.getAllEvents().subscribe(
      (result) => {
        console.log(result);
        this.events = result;
      },
      (error) => console.error(error)
    );
  }
}
