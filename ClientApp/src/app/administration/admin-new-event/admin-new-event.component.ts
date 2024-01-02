import { DatePipe } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { ICategoryDTO, IEventDTO } from "src/app/models";
import { EventService } from "src/app/services/event.service";

@Component({
	selector: "admin-new-event",
	templateUrl: "./admin-new-event.component.html",
	styleUrls: ["./admin-new-event.component.css"],
})
export class AdminNewEventComponent {
	public availableCategories: ICategoryDTO[] = [];
	public newEvent: IEventDTO = {
		id: "",
		teamOneName: "",
		teamTwoName: "",
		teamOneScore: 0,
		teamTwoScore: 0,
		shortDescription: "",
		description: "",
		date: new Date(Date.now()),
		photoUrls: [],
		categoryNames: [],
		categoryIds: [],
	};

	constructor(
		public eventsService: EventService,
		private datePipe: DatePipe
	) {
		eventsService.getEventCategories().subscribe((result) => {
			this.availableCategories = result;
		});
	}

	public getFormattedDate() {
		return this.datePipe.transform(this.newEvent.date, "yyyy-MM-dd");
	}

	public setFormattedDate(date: string) {
		return new Date(date);
	}

	public resetSelections() {
		this.newEvent = {
			id: "",
			teamOneName: "",
			teamTwoName: "",
			teamOneScore: 0,
			teamTwoScore: 0,
			shortDescription: "",
			description: "",
			date: new Date(Date.now()),
			photoUrls: [],
			categoryNames: [],
		};
	}

	public saveEntry() {
		if (this.validateEntries()) {
			this.eventsService.postEvent(this.newEvent).subscribe(
				(response) => {
					console.log(response);
				},
				(error) => {
					console.error(error);
				}
			);
		}
	}

	validateEntries() {
		if (
			this.newEvent.teamOneName === "" ||
			this.newEvent.teamTwoName === ""
		) {
			console.log("ime");
			return false;
		}
		if (this.newEvent.date === null) {
			console.log("date");
			return false;
		}
		if (this.newEvent.categoryIds === undefined) {
			return false;
		}
		if (
			this.newEvent.categoryIds !== null &&
			this.newEvent.categoryIds!.length <= 0
		) {
			console.log("categoryNames");
			return false;
		}
		return true;
	}
}
