import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventDTO } from "src/app/models";
import { EventService } from "src/app/services/event.service";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
})
export class HomeComponent {
	public events: EventDTO[] = [];
	public filteredEvents: EventDTO[] = [];
	searchText: string = "";

	constructor(public eventService: EventService, public router: Router) {
		this.eventService.getAllEvents().subscribe(
			(result) => {
				this.events = result;
				this.filteredEvents = this.events;
			},
			(error) => console.error(error)
		);
	}

	onSearchTextEntered(searchValue: string) {
		this.searchText = searchValue;
		this.filteredEvents = this.events.filter(
			(e) =>
				e.teamOneName
					.toLowerCase()
					.includes(this.searchText.toLowerCase()) ||
				e.teamTwoName
					.toLowerCase()
					.includes(this.searchText.toLowerCase())
		);
	}
}
