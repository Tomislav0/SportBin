import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EventDTO, ICategoryDTO, IEventDTO } from "src/app/models";
import { CategoryService } from "src/app/services/category.service";

@Component({
	selector: "app-event-card",
	templateUrl: "./event-card.component.html",
	styleUrls: ["./event-card.component.css"],
})
export class EventCardComponent {
	@Input()
	event!: IEventDTO;
	showScore: boolean = false;
	category: ICategoryDTO | undefined;
	public isAdminPage: boolean = false;
	@Output() public onEditEventClicked = new EventEmitter<string>();
	@Output() public onDeleteEventClicked = new EventEmitter<string>();

	constructor(public router: Router) {
		this.isAdminPage = this.router.url.includes("admin");
	}

	public onEventClicked(event: IEventDTO) {
		if (this.isAdminPage) {
			return;
		}
		this.router.navigate([`details/${event.id}`]);
	}

	public onEditClicked(eventId?: string) {
		this.onEditEventClicked.emit(eventId);
	}

	public onDeleteClicked(eventId?: string) {
		this.onDeleteEventClicked.emit(eventId);
	}
}
