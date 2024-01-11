import { Component, EventEmitter, Output, Input } from "@angular/core";
import { IEventDTO } from "src/app/models";
import { EventService } from "src/app/services/event.service";

@Component({
	selector: "admin-event-list",
	templateUrl: "./admin-event-list.component.html",
	styleUrls: ["./admin-event-list.component.css"],
})
export class AdminEventListComponent {
	public events: IEventDTO[] = [];
	@Output() public editEventEmitter = new EventEmitter<string>();

	constructor(public eventService: EventService) {
		this.eventService.getAllEvents().subscribe(
			(result) => {
				this.events = result;
			},
			(error) => console.error(error)
		);
	}

	public editEventClick(eventId?: string) {
		this.editEventEmitter.emit(eventId);
	}

	public deleteEventClick(eventId?: string) {
		this.eventService.deleteEvent(eventId).subscribe(
			(result) => {
				this.events = this.events.filter((ev) => ev.id !== eventId);
			},
			(error) => console.error(error)
		);
	}
}
