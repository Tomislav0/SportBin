import { Component, Input } from "@angular/core";
import { EventDTO } from "src/app/models";

@Component({
	selector: "app-selected-events",
	templateUrl: "./selected-events.component.html",
	styleUrls: ["./selected-events.component.css"],
})
export class SelectedEventsComponent {
	@Input()
	events!: EventDTO[];
}
