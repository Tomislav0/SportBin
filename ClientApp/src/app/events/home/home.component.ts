import { HttpClient } from "@angular/common/http";
import { Component, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { EventDTO } from "src/app/models";
import { EventService } from "src/app/services/event.service";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
})
export class HomeComponent {
	public events: EventDTO[] = [];
	constructor(public eventService: EventService, public router: Router) {
		this.eventService.getAllEvents().subscribe(
			(result) => {
				this.events = result;
			},
			(error) => console.error(error)
		);
	}

	public onEventClicked(event: EventDTO) {
		this.router.navigate([`details/${event.id}`]);
	}
}
