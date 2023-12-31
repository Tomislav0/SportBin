import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthGuard } from "src/app/helpers/auth.guard";
import { EventDTO } from "src/app/models";
import { EventService } from "src/app/services/event.service";

@Component({
	selector: "app-details-page",
	templateUrl: "./details-page.component.html",
	styleUrls: ["./details-page.component.css"],
})
export class DetailsPageComponent implements OnInit {
	constructor(
		public eventService: EventService,
		public route: ActivatedRoute,
		public authGuard: AuthGuard
	) {}
	public event: EventDTO | undefined;
	public isAdmin: boolean = false;

	ngOnInit() {
		this.route.params.subscribe((params) => {
			const eventId = params["eventId"];
			this.eventService.getEventById(eventId).subscribe(
				(result: EventDTO) => {
					this.event = result;
					if (typeof this.event.date == "string") {
						this.event.date = new Date(this.event.date);
					}
				},
				(error) => console.error(error)
			);
		});
		this.isAdmin = this.authGuard.isAdmin();
	}

	public getTitleOfMatch() {
		if (this.event) {
			const t1 = this.event.teamOneName;
			const t2 = this.event.teamTwoName;
			return t1.toUpperCase() + " - " + t2.toUpperCase();
		}
		return "";
	}

	public getScoreOfMatch() {
		if (this.event) {
			const t1 = this.event.teamOneScore;
			const t2 = this.event.teamTwoScore;
			return t1 + " - " + t2;
		}
		return "";
	}

	public getDateOfMatch() {
		if (this.event) {
			const options: Intl.DateTimeFormatOptions = {
				day: "2-digit",
				month: "2-digit",
				year: "numeric",
			};
			const date = this.event.date.toLocaleDateString("hr-HR", options);
			return date;
		}
		return "";
	}
}
