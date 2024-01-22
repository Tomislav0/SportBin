import { Component, Input } from "@angular/core";
import { EventDTO } from "src/app/models";

@Component({
	selector: "app-all-events",
	templateUrl: "./all-events.component.html",
	styleUrls: ["./all-events.component.css"],
})
export class AllEventsComponent {
	@Input()
	events!: EventDTO[];
}
